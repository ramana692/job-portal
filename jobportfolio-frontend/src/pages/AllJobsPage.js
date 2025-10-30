import React, { useState } from "react";
import "./JobsPage.css"; // same style file for consistency
import ApplicationForm from "../components/ApplicationForm";
import {
  FaUniversity,
  FaBuilding,
  FaBriefcase,
  FaLaptopCode,
  FaUserTie,
  FaTools,
  FaStethoscope,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaGavel,
  FaTrain,
  FaTree,
  FaRegNewspaper,
  FaMoneyCheckAlt,
  FaPlaneDeparture,
  FaGlobe,
  FaHospital,
  FaCogs,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";

const AllJobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  const governmentJobs = [
    { id: 1, title: "Civil Service Officer", company: "Government of India", icon: <FaGavel />, type: "Full Time", location: "Delhi" },
    { id: 2, title: "Railway Engineer", company: "Indian Railways", icon: <FaTrain />, type: "Full Time", location: "Chennai" },
    { id: 3, title: "Forest Officer", company: "Forest Department", icon: <FaTree />, type: "Full Time", location: "Ooty" },
    { id: 4, title: "Police Inspector", company: "State Police", icon: <FaShieldAlt />, type: "Full Time", location: "Hyderabad" },
    { id: 5, title: "Bank Officer", company: "State Bank of India", icon: <FaMoneyCheckAlt />, type: "Full Time", location: "Mumbai" },
    { id: 6, title: "Post Office Assistant", company: "India Post", icon: <FaRegNewspaper />, type: "Part Time", location: "Lucknow" },
    { id: 7, title: "Customs Officer", company: "Customs Department", icon: <FaPlaneDeparture />, type: "Full Time", location: "Goa" },
    { id: 8, title: "Public Health Worker", company: "Health Ministry", icon: <FaHospital />, type: "Full Time", location: "Pune" },
    { id: 9, title: "Government Teacher", company: "Education Department", icon: <FaChalkboardTeacher />, type: "Full Time", location: "Bangalore" },
    { id: 10, title: "Data Entry Clerk", company: "Government Office", icon: <FaLaptopCode />, type: "Internship", location: "Online" },
  ];

  const privateJobs = [
    { id: 11, title: "Software Developer", company: "Tech Solutions Ltd", icon: <FaLaptopCode />, type: "Full Time", location: "Bangalore" },
    { id: 12, title: "HR Executive", company: "Corporate Inc", icon: <FaUserTie />, type: "Full Time", location: "Mumbai" },
    { id: 13, title: "Marketing Intern", company: "Digital Marketing Co", icon: <FaBriefcase />, type: "Internship", location: "Delhi" },
    { id: 14, title: "Sales Manager", company: "Sales Pro Ltd", icon: <FaUsers />, type: "Full Time", location: "Pune" },
    { id: 15, title: "Graphic Designer", company: "Creative Studio", icon: <FaBuilding />, type: "Part Time", location: "Chennai" },
    { id: 16, title: "Customer Support", company: "Support Services", icon: <FaPhoneAlt />, type: "Full Time", location: "Hyderabad" },
    { id: 17, title: "Product Analyst", company: "Analytics Corp", icon: <FaUniversity />, type: "Full Time", location: "Gurgaon" },
    { id: 18, title: "Accountant", company: "Finance Partners", icon: <FaMoneyCheckAlt />, type: "Full Time", location: "Kolkata" },
    { id: 19, title: "Technical Support Engineer", company: "TechHelp Ltd", icon: <FaTools />, type: "Full Time", location: "Remote" },
    { id: 20, title: "UI/UX Designer", company: "Design Studio Pro", icon: <FaLaptopCode />, type: "Part Time", location: "Noida" },
  ];

  const allJobs = [...governmentJobs, ...privateJobs];

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsApplying(false);
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsApplying(true);
  };

  const closePanel = () => {
    setSelectedJob(null);
    setIsApplying(false);
  };

  const renderJobCard = (job) => (
    <div key={job.id} className="job-card">
      <div className="job-icon">{job.icon}</div>
      <h3>{job.title}</h3>
      <div className="job-buttons">
        <button onClick={() => handleViewDetails(job)}>View</button>
        <button onClick={() => handleApply(job)}>Apply</button>
      </div>
    </div>
  );

  return (
    <div className={`jobs-container ${selectedJob ? "with-panel" : ""}`}>
      <div className="jobs-grid">
        <h2>All Jobs</h2>
        <div className="job-list">{allJobs.map(renderJobCard)}</div>
      </div>

      {selectedJob && (
        <div className="side-panel">
          <button className="close-btn" onClick={closePanel}>❌</button>
          {!isApplying ? (
            <div className="job-details">
              <h2>{selectedJob.title}</h2>
              <p><strong>Company:</strong> {selectedJob.company || 'Not specified'}</p>
              <p><strong>Type:</strong> {selectedJob.type}</p>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <button onClick={() => setIsApplying(true)}>Apply Now</button>
            </div>
          ) : (
            <ApplicationForm job={selectedJob} onClose={closePanel} />
          )}
        </div>
      )}
    </div>
  );
};

export default AllJobsPage;
