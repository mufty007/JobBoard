import React from 'react';
import './Jobs.css';
import './App.css';

export default function Job({ job }) {
  return (
    <div className="job-card">
      <div className="img">
        <img src={job.company_logo} alt="company logo"/>
      </div>
      <div className="job-details">
        <h2>{job.title}</h2>
        <div className="job-comapany-info">
          <p>
            <small>{job.company}</small>
          </p>
          <span></span>
          <p>
            <small>{job.location}</small>
          </p>
          <span></span>
          <p>
            <small>{new Date(job.created_at).toLocaleDateString()}</small>
          </p>
        </div>
      </div>
      <div className="job-type">
        <span></span>
        <strong>{job.type}</strong>
      </div>
      <div className="bottom-border"></div>
    </div>
    
  )
}