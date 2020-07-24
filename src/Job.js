import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Link
} from "react-router-dom";


import './Jobs.css';
import './App.css';

const ReactDOM = require('react-dom')


// function LinkRenderer(props) {
//   return <a href={props.href} target="_blank">{props.children}</a>
// }

// <ReactMarkdown
//   source={job.how_to_apply}
//   renderers={{link: LinkRenderer}}
// />


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