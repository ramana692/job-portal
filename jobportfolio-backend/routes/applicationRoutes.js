const express = require('express');
const router = express.Router();
const { 
  submitApplication, 
  getMyApplications, 
  getAllApplications,
  updateApplicationStatus 
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

// All routes are protected
router.post('/', protect, submitApplication);
router.get('/', protect, getMyApplications);
router.get('/all', protect, getAllApplications);
router.put('/:id', protect, updateApplicationStatus);

module.exports = router;
