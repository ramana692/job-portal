import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./JobsPage.css";
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

const JobsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobType = queryParams.get("type"); // 'government' or 'private'

  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);

  // -------- GOVERNMENT JOBS (20) --------
  const governmentJobs = [
    {
      id: 1,
      title: "Civil Service Officer",
      company: "Government of India",
      icon: <FaGavel />,
      type: "Full Time",
      location: "Delhi",
      description:
        "Responsible for policy implementation, administrative decision-making, and ensuring effective governance across various departments.",
    },
    {
      id: 2,
      title: "Railway Engineer",
      company: "Indian Railways",
      icon: <FaTrain />,
      type: "Full Time",
      location: "Chennai",
      description:
        "Designs, constructs, and maintains railway tracks, signaling systems, and safety measures for efficient train operations.",
    },
    {
      id: 3,
      title: "Forest Officer",
      company: "Forest Department",
      icon: <FaTree />,
      type: "Full Time",
      location: "Ooty",
      description:
        "Manages forest conservation, wildlife protection, and eco-balance initiatives while overseeing forest staff and patrols.",
    },
    {
      id: 4,
      title: "Police Inspector",
      company: "State Police",
      icon: <FaShieldAlt />,
      type: "Full Time",
      location: "Hyderabad",
      description:
        "Leads police teams, maintains law and order, investigates crimes, and ensures public safety in assigned jurisdictions.",
    },
    {
      id: 5,
      title: "Bank Officer",
      company: "State Bank of India",
      icon: <FaMoneyCheckAlt />,
      type: "Full Time",
      location: "Mumbai",
      description:
        "Manages financial transactions, customer relations, loan processing, and ensures compliance with banking regulations.",
    },
    {
      id: 6,
      title: "Post Office Assistant",
      company: "India Post",
      icon: <FaRegNewspaper />,
      type: "Part Time",
      location: "Lucknow",
      description:
        "Handles daily postal operations, including sorting, dispatching, and maintaining mail records for public services.",
    },
    {
      id: 7,
      title: "Customs Officer",
      icon: <FaPlaneDeparture />,
      type: "Full Time",
      location: "Goa",
      description:
        "Prevents illegal import/export activities, inspects cargo, and enforces customs laws at ports and airports.",
    },
    {
      id: 8,
      title: "Public Health Worker",
      icon: <FaHospital />,
      type: "Full Time",
      location: "Pune",
      description:
        "Promotes health awareness, coordinates vaccination programs, and supports community health initiatives.",
    },
    {
      id: 9,
      title: "Government Teacher",
      icon: <FaChalkboardTeacher />,
      type: "Full Time",
      location: "Bangalore",
      description:
        "Educates students in government schools, develops lesson plans, and contributes to holistic student growth.",
    },
    {
      id: 10,
      title: "Data Entry Clerk",
      icon: <FaLaptopCode />,
      type: "Internship",
      location: "Online",
      description:
        "Responsible for entering and maintaining digital government records with accuracy and efficiency.",
    },
    {
      id: 11,
      title: "Transport Officer",
      icon: <FaTrain />,
      type: "Full Time",
      location: "Jaipur",
      description:
        "Supervises public transportation systems, enforces motor vehicle laws, and ensures safety compliance.",
    },
    {
      id: 12,
      title: "Municipal Engineer",
      icon: <FaCogs />,
      type: "Full Time",
      location: "Ahmedabad",
      description:
        "Oversees city infrastructure development including drainage, water supply, and road maintenance projects.",
    },
    {
      id: 13,
      title: "Court Clerk",
      icon: <FaGavel />,
      type: "Part Time",
      location: "Delhi",
      description:
        "Assists judges and attorneys by preparing documents, managing case files, and maintaining legal records.",
    },
    {
      id: 14,
      title: "Revenue Officer",
      icon: <FaUniversity />,
      type: "Full Time",
      location: "Kolkata",
      description:
        "Handles tax collection, property evaluation, and revenue administration in government departments.",
    },
    {
      id: 15,
      title: "Fire Department Staff",
      icon: <FaTools />,
      type: "Full Time",
      location: "Surat",
      description:
        "Responds to emergencies, conducts rescue operations, and ensures fire safety compliance across institutions.",
    },
    {
      id: 16,
      title: "Airport Security Officer",
      icon: <FaShieldAlt />,
      type: "Full Time",
      location: "Mumbai",
      description:
        "Monitors passengers and luggage, enforces security regulations, and coordinates with law enforcement agencies.",
    },
    {
      id: 17,
      title: "Government Nurse",
      icon: <FaStethoscope />,
      type: "Full Time",
      location: "Chennai",
      description:
        "Provides medical assistance, patient care, and supports healthcare initiatives in public hospitals.",
    },
    {
      id: 18,
      title: "Public Relations Officer",
      icon: <FaUsers />,
      type: "Full Time",
      location: "Delhi",
      description:
        "Manages media communication, organizes public campaigns, and builds relations with community stakeholders.",
    },
    {
      id: 19,
      title: "Electricity Board Engineer",
      icon: <FaCogs />,
      type: "Full Time",
      location: "Vizag",
      description:
        "Designs, tests, and maintains electrical power systems to ensure uninterrupted power distribution.",
    },
    {
      id: 20,
      title: "Social Welfare Officer",
      icon: <FaGlobe />,
      type: "Full Time",
      location: "Kochi",
      description:
        "Plans and executes welfare programs for underprivileged communities, women, and children.",
    },
  ];

  // -------- PRIVATE JOBS (20) --------
  const privateJobs = [
    {
      id: 21,
      title: "Software Developer",
      icon: <FaLaptopCode />,
      type: "Full Time",
      location: "Bangalore",
      description:
        "Develops and maintains software applications using modern frameworks. Requires strong coding and problem-solving skills.",
    },
    {
      id: 22,
      title: "HR Executive",
      icon: <FaUserTie />,
      type: "Full Time",
      location: "Mumbai",
      description:
        "Handles recruitment, employee relations, and HR policy implementation in a corporate environment.",
    },
    {
      id: 23,
      title: "Marketing Intern",
      icon: <FaBriefcase />,
      type: "Internship",
      location: "Delhi",
      description:
        "Supports marketing campaigns, manages social media presence, and assists in brand promotions.",
    },
    {
      id: 24,
      title: "Sales Manager",
      icon: <FaUsers />,
      type: "Full Time",
      location: "Pune",
      description:
        "Leads the sales team, drives business growth, and builds client relationships for increased revenue.",
    },
    {
      id: 25,
      title: "Graphic Designer",
      icon: <FaBuilding />,
      type: "Part Time",
      location: "Chennai",
      description:
        "Creates visual content for digital and print media using Adobe tools and creative concepts.",
    },
    {
      id: 26,
      title: "Customer Support",
      icon: <FaPhoneAlt />,
      type: "Full Time",
      location: "Hyderabad",
      description:
        "Resolves customer queries via phone, chat, or email while ensuring a positive user experience.",
    },
    {
      id: 27,
      title: "Product Analyst",
      icon: <FaUniversity />,
      type: "Full Time",
      location: "Gurgaon",
      description:
        "Analyzes market trends and customer data to improve product strategy and enhance user engagement.",
    },
    {
      id: 28,
      title: "Accountant",
      icon: <FaMoneyCheckAlt />,
      type: "Full Time",
      location: "Kolkata",
      description:
        "Maintains company financial records, prepares statements, and ensures compliance with accounting standards.",
    },
    {
      id: 29,
      title: "Technical Support Engineer",
      icon: <FaTools />,
      type: "Full Time",
      location: "Remote",
      description:
        "Provides IT troubleshooting assistance, resolves software issues, and ensures system reliability.",
    },
    {
      id: 30,
      title: "UI/UX Designer",
      icon: <FaLaptopCode />,
      type: "Part Time",
      location: "Noida",
      description:
        "Designs user interfaces and improves usability by conducting user research and wireframing.",
    },
    {
      id: 31,
      title: "Medical Representative",
      icon: <FaStethoscope />,
      type: "Full Time",
      location: "Chennai",
      description:
        "Promotes pharmaceutical products to healthcare professionals and maintains strong client relationships.",
    },
    {
      id: 32,
      title: "Software Tester",
      icon: <FaCogs />,
      type: "Internship",
      location: "Pune",
      description:
        "Performs manual and automated testing to ensure software quality and functionality before release.",
    },
    {
      id: 33,
      title: "Digital Marketer",
      icon: <FaUsers />,
      type: "Full Time",
      location: "Bangalore",
      description:
        "Executes SEO, SEM, and social media campaigns to drive traffic and increase brand visibility.",
    },
    {
      id: 34,
      title: "Data Analyst",
      icon: <FaGlobe />,
      type: "Full Time",
      location: "Hyderabad",
      description:
        "Interprets large datasets to extract insights, generate reports, and support business decisions.",
    },
    {
      id: 35,
      title: "Project Manager",
      icon: <FaUniversity />,
      type: "Full Time",
      location: "Delhi",
      description:
        "Plans, executes, and monitors projects ensuring delivery within timelines and budgets.",
    },
    {
      id: 36,
      title: "Operations Executive",
      icon: <FaBuilding />,
      type: "Full Time",
      location: "Kochi",
      description:
        "Manages day-to-day operations, coordinates between departments, and ensures workflow efficiency.",
    },
    {
      id: 37,
      title: "Customer Success",
      icon: <FaUsers />,
      type: "Part Time",
      location: "Remote",
      description:
        "Ensures client satisfaction post-sales, monitors account health, and improves retention rates.",
    },
    {
      id: 38,
      title: "Content Writer",
      icon: <FaRegNewspaper />,
      type: "Internship",
      location: "Online",
      description:
        "Creates blogs, website content, and marketing materials aligned with SEO strategies.",
    },
    {
      id: 39,
      title: "Front Desk Executive",
      icon: <FaUserTie />,
      type: "Full Time",
      location: "Hyderabad",
      description:
        "Manages visitor interactions, handles calls, and provides administrative support to the office.",
    },
    {
      id: 40,
      title: "Software Architect",
      icon: <FaLaptopCode />,
      type: "Full Time",
      location: "Bangalore",
      description:
        "Designs scalable software systems, sets coding standards, and mentors development teams.",
    },
  ];

  const jobsToShow = jobType === "government" ? governmentJobs : privateJobs;
  const titleToShow = jobType === "government" ? "Government Jobs" : "Private Jobs";

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
        <button onClick={() => handleViewDetails(job)}>View Details</button>
        <button onClick={() => handleApply(job)}>Apply</button>
      </div>
    </div>
  );

  return (
    <div className={`jobs-container ${selectedJob ? "with-panel" : ""}`}>
      <div className="jobs-grid">
        <h2>{titleToShow}</h2>
        <div className="job-list">{jobsToShow.map(renderJobCard)}</div>
      </div>

      {selectedJob && (
        <div className="side-panel">
          <button className="close-btn" onClick={closePanel}>❌</button>
          {!isApplying ? (
            <div className="job-details">
              <h2>{selectedJob.title}</h2>
              <p><strong>Type:</strong> {selectedJob.type}</p>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <p><strong>Description:</strong> {selectedJob.description}</p>
              <button className="apply-now-btn" onClick={() => setIsApplying(true)}>Apply Now</button>
            </div>
          ) : (
            <ApplicationForm job={selectedJob} onClose={closePanel} />
          )}
        </div>
      )}
    </div>
  );
};

export default JobsPage;
