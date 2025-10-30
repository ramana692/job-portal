import React from "react";
import "./JobCard.css";

export default function JobCard({ job, onViewDetails, onApply }) {
  return (
    <div className="job-card">
      <div className="job-card-top">
        <img src={job.img} alt={job.title} />
        <div className="job-meta">
          <h3>{job.title}</h3>
          <p className="company">{job.company}</p>
          <p className="location">{job.location}</p>
        </div>
      </div>

      <div className="job-actions">
        <button className="btn-outline" onClick={() => onViewDetails(job)}>View Details</button>
        <button onClick={() => onApply(job)}>Apply</button>
      </div>
    </div>
  );
}
