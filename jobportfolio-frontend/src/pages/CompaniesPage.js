import React from "react";
import "./CompaniesPage.css";
import {
  FaUniversity,
  FaTrain,
  FaShieldAlt,
  FaGavel,
  FaHospital,
  FaBuilding,
  FaLaptopCode,
  FaUserTie,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const CompaniesPage = () => {
  const companies = [
    // ---------- Government Organizations ----------
    {
      id: 1,
      name: "Indian Railways",
      logo: <FaTrain />,
      location: "All India",
      type: "Government Sector",
      description:
        "The Indian Railways offers vast career opportunities in engineering, management, and operations across India.",
    },
    {
      id: 2,
      name: "Union Public Service Commission (UPSC)",
      logo: <FaGavel />,
      location: "New Delhi",
      type: "Civil Services",
      description:
        "UPSC conducts competitive exams for various administrative and civil service positions in India.",
    },
    {
      id: 3,
      name: "State Police Department",
      logo: <FaShieldAlt />,
      location: "All States",
      type: "Law Enforcement",
      description:
        "State police departments recruit officers and inspectors dedicated to maintaining law and order.",
    },
    {
      id: 4,
      name: "National Health Mission (NHM)",
      logo: <FaHospital />,
      location: "Across India",
      type: "Healthcare",
      description:
        "NHM focuses on public health services, recruiting professionals for healthcare delivery and administration.",
    },
    {
      id: 5,
      name: "Ministry of Finance",
      logo: <FaUniversity />,
      location: "New Delhi",
      type: "Government Administration",
      description:
        "The Ministry manages India's economic policy, taxation, and public financial management roles.",
    },

    // ---------- Private Companies ----------
    {
      id: 6,
      name: "Infosys",
      logo: <FaLaptopCode />,
      location: "Bangalore",
      type: "IT Services",
      description:
        "Infosys provides IT consulting and software development services, offering jobs for developers, testers, and analysts.",
    },
    {
      id: 7,
      name: "Tata Consultancy Services (TCS)",
      logo: <FaBuilding />,
      location: "Mumbai",
      type: "Technology & Business Solutions",
      description:
        "TCS is a leading global IT firm offering opportunities in software, analytics, and project management.",
    },
    {
      id: 8,
      name: "Wipro",
      logo: <FaTools />,
      location: "Hyderabad",
      type: "Information Technology",
      description:
        "Wipro recruits professionals in software development, testing, and system engineering domains.",
    },
    {
      id: 9,
      name: "HCL Technologies",
      logo: <FaUsers />,
      location: "Noida",
      type: "Technology & Innovation",
      description:
        "HCL focuses on digital transformation, hiring developers, analysts, and technical consultants.",
    },
    {
      id: 10,
      name: "Deloitte",
      logo: <FaUserTie />,
      location: "Gurgaon",
      type: "Consulting & Finance",
      description:
        "Deloitte offers consulting, auditing, and business strategy services across multiple industries.",
    },
  ];

  return (
    <div className="companies-container">
      <h2>Top Hiring Companies & Organizations</h2>
      <div className="companies-grid">
        {companies.map((company) => (
          <div key={company.id} className="company-card">
            <div className="company-logo">{company.logo}</div>
            <h3>{company.name}</h3>
            <p><strong>Location:</strong> {company.location}</p>
            <p><strong>Industry:</strong> {company.type}</p>
            <p className="company-desc">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
