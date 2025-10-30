const JobApplication = require('../models/JobApplication');

// @desc    Submit a job application
// @route   POST /api/applications
// @access  Private
const submitApplication = async (req, res) => {
  try {
    const { jobTitle, company, applicantName, email, phone, coverLetter, resume } = req.body;

    console.log('Received application data:', { jobTitle, company, applicantName, email, phone });
    console.log('User ID:', req.user._id);

    // Validate input
    if (!jobTitle || !company || !applicantName || !email || !phone) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Create application
    const application = await JobApplication.create({
      user: req.user._id,
      jobTitle,
      company,
      applicantName,
      email,
      phone,
      coverLetter,
      resume
    });

    console.log('Application created successfully:', application._id);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      application
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get user's job applications
// @route   GET /api/applications
// @access  Private
const getMyApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find({ user: req.user._id }).sort({ appliedAt: -1 });

    res.json({
      success: true,
      count: applications.length,
      applications
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all job applications (Admin)
// @route   GET /api/applications/all
// @access  Private
const getAllApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().populate('user', 'name email').sort({ appliedAt: -1 });

    res.json({
      success: true,
      count: applications.length,
      applications
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update application status
// @route   PUT /api/applications/:id
// @access  Private
const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    const application = await JobApplication.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Check if user owns the application
    if (application.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this application' });
    }

    application.status = status || application.status;
    const updatedApplication = await application.save();

    res.json({
      success: true,
      message: 'Application updated successfully',
      application: updatedApplication
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  submitApplication,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus
};
