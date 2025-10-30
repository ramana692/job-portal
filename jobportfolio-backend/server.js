const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Job Portfolio API is running' });
});

// Test route to check database
app.get('/api/test-db', async (req, res) => {
  try {
    const JobApplication = require('./models/JobApplication');
    const count = await JobApplication.countDocuments();
    res.json({ 
      message: 'Database connected', 
      applicationsCount: count,
      database: process.env.MONGODB_URI.split('/')[3].split('?')[0]
    });
  } catch (error) {
    res.status(500).json({ message: 'Database error', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
