import React from "react";
import "./ResumeBuilderPage.css";

const ResumeBuilderPage = () => {
  return (
    <div className="resume-builder-container">
      <h1>Resume Builder</h1>
      <form className="resume-form">
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Experience:</label>
        <textarea placeholder="Describe your experience" />

        <label>Upload Resume:</label>
        <input type="file" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilderPage;
