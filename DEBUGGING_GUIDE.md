# Debugging Guide - Job Application Not Storing

## Step 1: Open API Test Page
I've created a test page at: `c:\Users\Dell\Downloads\msdfinalv\msdfinalv\api-test.html`

1. Open this file in your browser (double-click it)
2. Follow these steps in order:
   - Click "Test Connection" - Should show API is running
   - Click "Signup" - Creates a test user
   - Click "Submit Application" - This will save to MongoDB
3. Check MongoDB Atlas - You should see the application!

## Step 2: Test in Main Application

1. Go to http://localhost:3000
2. Open Browser Console (F12 or Right-click → Inspect → Console tab)
3. Click "Sign Up" or "Login"
4. Go to "All Jobs"
5. Click "Apply" on any job
6. Fill form and submit
7. **Watch the Console** for:
   - "Submitting application: ..." (shows data being sent)
   - "Application submitted successfully: ..." (shows response)
   - Any error messages

## Step 3: Check Backend Logs

In your terminal where backend is running, you should see:
```
[timestamp] - POST /api/auth/signup    (when you signup)
[timestamp] - POST /api/auth/login     (when you login)
[timestamp] - POST /api/applications   (when you apply)
Received application data: {...}
Application created successfully: [ID]
```

## Common Issues & Solutions

### Issue 1: Not Logged In
**Symptom**: "Please login to apply for jobs" alert
**Solution**: 
- Sign up or login first
- Check browser localStorage has 'token' and 'user'

### Issue 2: CORS Error
**Symptom**: Console shows "CORS policy" error
**Solution**: 
- Backend already has CORS enabled
- Make sure backend is on port 5000

### Issue 3: Network Error
**Symptom**: Console shows "Failed to fetch"  
**Solution**:
- Check backend is running on port 5000
- Test connection: http://localhost:5000/

### Issue 4: Token Invalid
**Symptom**: "Not authorized" or 401 error
**Solution**:
- Logout and login again
- Clear localStorage and signup again

### Issue 5: Missing Company Field
**Symptom**: "Please provide all required fields"
**Solution**:
- Jobs should now have company field
- Or fallback to "Not Specified"

## Manual Test with Browser Console

Open browser console and run:

```javascript
// 1. Check if user is logged in
console.log('Token:', localStorage.getItem('token'));
console.log('User:', localStorage.getItem('user'));

// 2. Test application submission
const token = localStorage.getItem('token');

fetch('http://localhost:5000/api/applications', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    jobTitle: "Test Job",
    company: "Test Company",
    applicantName: "Test User",
    email: "test@example.com",
    phone: "1234567890",
    coverLetter: "Test cover letter",
    resume: "test.pdf"
  })
})
.then(r => r.json())
.then(d => console.log('Success:', d))
.catch(e => console.error('Error:', e));
```

## Check MongoDB Atlas

1. Go to https://cloud.mongodb.com/
2. Click "Browse Collections"
3. Select **jobportfolio** database
4. Check **jobapplications** collection
5. You should see documents!

## Backend Status Check

Run this in PowerShell:
```powershell
curl http://localhost:5000/
```

Should return: `{"message":"Job Portfolio API is running"}`

## Need More Help?

Check the backend terminal output - it will show all incoming requests and any errors!
