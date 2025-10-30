# Job Portfolio Application - Setup Guide

Complete authentication system with MongoDB Atlas integration.

## ✨ Features Implemented

### Backend
- ✅ User authentication (Signup/Login) with JWT
- ✅ Password hashing with bcryptjs
- ✅ Protected API routes requiring authentication
- ✅ MongoDB Atlas database connection
- ✅ Job application submission (requires login)
- ✅ User data stored in MongoDB Atlas

### Frontend
- ✅ Login page with form validation
- ✅ Signup page with password confirmation
- ✅ Authentication state management
- ✅ Protected job application (must login first)
- ✅ User welcome message in navbar
- ✅ Logout functionality
- ✅ Auto-redirect to login when not authenticated
- ✅ Error handling and user feedback

## 🚀 Quick Start

### 1. Backend Setup

```bash
# Navigate to backend directory
cd jobportfolio-backend

# Install dependencies
npm install

# Start the server
npm start
```

Backend will run on `http://localhost:5000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd jobportfolio-frontend

# Install dependencies (if not already done)
npm install

# Start the development server
npm start
```

Frontend will run on `http://localhost:3000`

## 📝 How to Use

### Creating an Account
1. Navigate to the **Sign Up** page
2. Fill in your details:
   - Full Name
   - Email
   - Phone Number (optional)
   - Password (minimum 6 characters)
   - Confirm Password
3. Click **Sign Up**
4. You'll be automatically logged in and redirected to home

### Logging In
1. Navigate to the **Login** page
2. Enter your email and password
3. Click **Login**
4. You'll be redirected to home with a welcome message

### Applying for Jobs
1. **You must be logged in** to apply for jobs
2. Browse jobs on the **All Jobs** page
3. Click **Apply** on any job
4. If not logged in, you'll be redirected to the login page
5. If logged in, fill out the application form (pre-filled with your info)
6. Submit the application
7. Your application is saved to MongoDB Atlas

### Logging Out
- Click the **Logout** button in the navigation bar
- You'll be logged out and redirected to home

## 🗄️ Database Structure

### MongoDB Atlas Connection
- **Connection String**: `mongodb+srv://job:job@cluster0.bo8cfvl.mongodb.net/`
- **Database**: Automatically created
- **Collections**:
  - `users` - Stores user accounts
  - `jobapplications` - Stores job applications

### User Document
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2a$10$hashedpassword...",
  "phone": "1234567890",
  "createdAt": "2025-10-30T..."
}
```

### Job Application Document
```json
{
  "_id": "ObjectId",
  "user": "ObjectId (reference to User)",
  "jobTitle": "Software Engineer",
  "company": "Tech Corp",
  "applicantName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "coverLetter": "Qualification and experience...",
  "resume": "resume.pdf",
  "status": "pending",
  "appliedAt": "2025-10-30T..."
}
```

## 🔐 Authentication Flow

1. **Signup/Login**: User provides credentials
2. **Backend**: Validates and creates JWT token
3. **Frontend**: Stores token in localStorage
4. **Protected Actions**: Token sent with API requests
5. **Backend**: Validates token before processing
6. **Database**: User and application data stored in MongoDB Atlas

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get user profile (Protected)

### Job Applications
- `POST /api/applications` - Submit application (Protected)
- `GET /api/applications` - Get user's applications (Protected)
- `GET /api/applications/all` - Get all applications (Protected)
- `PUT /api/applications/:id` - Update application (Protected)

## 🛠️ Technologies Used

### Backend
- Node.js & Express.js
- MongoDB with Mongoose ODM
- JWT (jsonwebtoken)
- bcryptjs for password hashing
- CORS for cross-origin requests
- dotenv for environment variables

### Frontend
- React.js
- React Router for navigation
- localStorage for token storage
- Fetch API for HTTP requests

## 📂 Project Structure

```
jobportfolio-backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Auth logic (signup, login)
│   └── applicationController.js  # Application logic
├── middleware/
│   └── authMiddleware.js     # JWT verification
├── models/
│   ├── User.js               # User schema
│   └── JobApplication.js     # Application schema
├── routes/
│   ├── authRoutes.js         # Auth endpoints
│   └── applicationRoutes.js  # Application endpoints
├── .env                      # Environment variables
├── server.js                 # Express server
└── package.json

jobportfolio-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.js         # Updated with auth state
│   │   └── ApplicationForm.js # Protected application form
│   ├── pages/
│   │   ├── LoginPage.js      # Login with backend integration
│   │   └── SignupPage.js     # Signup with backend integration
│   ├── services/
│   │   └── api.js            # API calls and auth functions
│   └── App.js
└── package.json
```

## 🔒 Security Features

- ✅ Passwords hashed with bcryptjs (10 salt rounds)
- ✅ JWT tokens with 30-day expiration
- ✅ Protected routes requiring valid tokens
- ✅ Client-side and server-side validation
- ✅ CORS configured for security
- ✅ Environment variables for sensitive data

## 🎯 Testing the System

1. **Start both servers** (backend on 5000, frontend on 3000)
2. **Create an account** on the signup page
3. **Check MongoDB Atlas** - You should see a new user in the database
4. **Login** with your credentials
5. **Apply for a job** - Must be logged in
6. **Check MongoDB Atlas** - You should see the application in the database
7. **Logout** and try to apply again - You'll be redirected to login

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB Atlas connection string is correct in `.env`
- Check if port 5000 is available
- Run `npm install` in backend directory

### Frontend won't connect to backend
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify API_URL in `src/services/api.js` is `http://localhost:5000/api`

### Can't login/signup
- Check browser console for errors
- Verify backend is running
- Check network tab for failed requests
- Ensure MongoDB connection is working

### Application submission fails
- Ensure you're logged in (check localStorage for token)
- Check backend console for errors
- Verify MongoDB connection is active

## 📊 Viewing Your Data in MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Login with your credentials
3. Click on **Browse Collections**
4. Select your cluster (Cluster0)
5. View:
   - **users** collection - All registered users
   - **jobapplications** collection - All job applications

## 🎉 Success!

Your Job Portfolio application now has:
- Complete authentication system
- MongoDB Atlas integration
- Protected job applications
- User session management
- Secure password storage
- Professional error handling

Users must login before applying for jobs, and all data is stored in your MongoDB Atlas database!
