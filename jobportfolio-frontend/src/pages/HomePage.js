import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import governmentImg from "../assets/government.webp";
import privateImg from "../assets/private.webp";
import resumeImg from "../assets/resume.webp";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to JobPortfolio</h1>
      <p>Find your dream job — Government, Private, or build your resume instantly!</p>

      <div className="home-sections">
        <div
          className="home-card"
          onClick={() => navigate("/jobs?type=government")}
        >
          <img src={governmentImg} alt="Government Jobs" />
          <h3>Government Jobs</h3>
          <p>Explore the latest openings in various government sectors.</p>
        </div>

        <div
          className="home-card"
          onClick={() => navigate("/jobs?type=private")}
        >
          <img src={privateImg} alt="Private Jobs" />
          <h3>Private Jobs</h3>
          <p>Discover exciting private sector opportunities for all roles.</p>
        </div>

        <div
          className="home-card"
          onClick={() => navigate("/resume-builder")}
        >
          <img src={resumeImg} alt="Resume Builder" />
          <h3>Resume Builder</h3>
          <p>Create a professional resume in just a few clicks.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
