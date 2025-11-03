const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  jobTitle: {
    type: String,
    required: [true, 'Please provide a job title']
  },
  company: {
    type: String,
    required: [true, 'Please provide a company name']
  },
  applicantName: {
    type: String,
    required: [true, 'Please provide your name']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email']
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number']
  },
  coverLetter: {
    type: String
  },
  resume: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending'
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'applications'  // Explicitly set collection name
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
