import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import './App.css'

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <div className="container">
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error, Try Refresing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </div>
  )
}

export default App;
