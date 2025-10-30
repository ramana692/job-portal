import React from "react";
import "./JobDetails.css";

export default function JobDetails({ job }) {
  if (!job) return <div className="job-details empty">Select a job to see details</div>;

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p style={{marginTop:12}}>{job.description}</p>
      <p style={{marginTop:12, fontStyle:"italic", color:"#666"}}>Posted: {job.posted}</p>
    </div>
  );
}
