# Job Portfolio - MERN Stack Application

A full-stack job portal application built with MongoDB, Express.js, React.js, and Node.js. This application allows users to browse government and private job listings, apply for jobs with authentication, and build resumes.

## Features

- 🔐 **User Authentication**: Secure signup/login with JWT tokens
- 💼 **Job Listings**: Browse government and private sector jobs
- 📝 **Job Applications**: Apply for jobs with cover letters and resume uploads
- 🏢 **Company Directory**: Explore top companies
- 📄 **Resume Builder**: Create professional resumes
- 🔍 **Search & Filter**: Find jobs by category, location, and type

## Tech Stack

### Frontend
- React.js
- React Router
- Axios for API calls
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt.js for password hashing

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd jobportfolio-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the server:
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd jobportfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Job Applications
- `POST /api/applications` - Submit job application (Protected)
- `GET /api/applications` - Get all applications (Protected)
- `GET /api/applications/my` - Get user's applications (Protected)

## Project Structure

```
jobportfolio-mernstack/
├── jobportfolio-backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── applicationController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── JobApplication.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── applicationRoutes.js
│   └── server.js
└── jobportfolio-frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── ApplicationForm.js
    │   │   ├── JobCard.js
    │   │   ├── JobDetails.js
    │   │   └── Navbar.js
    │   ├── pages/
    │   │   ├── HomePage.js
    │   │   ├── JobsPage.js
    │   │   ├── AllJobsPage.js
    │   │   ├── CompaniesPage.js
    │   │   ├── ResumeBuilderPage.js
    │   │   ├── LoginPage.js
    │   │   └── SignupPage.js
    │   ├── services/
    │   │   └── api.js
    │   └── App.js
    └── package.json
```

## Features in Detail

### Authentication System
- Secure user registration and login
- JWT token-based authentication
- Protected routes requiring login
- Password hashing with bcrypt

### Job Application System
- Users must be logged in to apply
- Form pre-fills with user details
- Support for cover letters
- Resume file upload
- Application status tracking

### Job Categories
- Government Jobs
- Private Sector Jobs
- Filter by location and job type

## Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### JobApplication Model
```javascript
{
  user: ObjectId (ref: User),
  jobTitle: String,
  company: String,
  applicantName: String,
  email: String,
  phone: String,
  coverLetter: String,
  resume: String,
  status: String (enum),
  appliedAt: Date
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

Krishna Veni - 231fa04835@gmail.com

Project Link: [https://github.com/krishnavenikv7/jobportfolio-mernstack](https://github.com/krishnavenikv7/jobportfolio-mernstack)
