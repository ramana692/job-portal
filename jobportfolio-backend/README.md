# Job Portfolio Backend

Backend API for Job Portfolio application with authentication and job application management.

## Features

- **User Authentication**: Signup, login with JWT tokens
- **Protected Routes**: Middleware to protect sensitive endpoints
- **Job Applications**: Submit and manage job applications (requires authentication)
- **MongoDB Atlas**: Cloud database storage

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://job:job@cluster0.bo8cfvl.mongodb.net/?appName=Cluster0
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
NODE_ENV=development
```

## Running the Server

```bash
# Production
npm start

# Development with auto-reload
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/signup`
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

#### POST `/api/auth/login`
Login user
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### GET `/api/auth/me`
Get current user profile (Protected)
- Requires: Bearer token in Authorization header

### Job Application Routes (`/api/applications`)

All application routes require authentication.

#### POST `/api/applications`
Submit a job application
```json
{
  "jobTitle": "Software Engineer",
  "company": "Tech Corp",
  "applicantName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "coverLetter": "I am interested in this position...",
  "resume": "resume.pdf"
}
```

#### GET `/api/applications`
Get user's applications (Protected)

#### GET `/api/applications/all`
Get all applications (Protected)

#### PUT `/api/applications/:id`
Update application status (Protected)
```json
{
  "status": "reviewed"
}
```

## Database Schema

### User Model
- name (String, required)
- email (String, required, unique)
- password (String, required, hashed)
- phone (String)
- createdAt (Date)

### Job Application Model
- user (ObjectId, ref: User)
- jobTitle (String, required)
- company (String, required)
- applicantName (String, required)
- email (String, required)
- phone (String, required)
- coverLetter (String)
- resume (String)
- status (String: pending/reviewed/accepted/rejected)
- appliedAt (Date)

## Technologies Used

- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests
- dotenv for environment variables

## Security

- Passwords are hashed using bcryptjs
- JWT tokens expire in 30 days
- Protected routes require valid JWT token
- CORS enabled for frontend communication
