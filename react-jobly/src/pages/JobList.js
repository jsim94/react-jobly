import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { JoblyApi } from "../api";
import { JobCard } from "../components";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  const populateJobs = async (q) => {
    setJobs(await JoblyApi.getJobs(q));
  };

  useEffect(() => {
    populateJobs();
  }, []);

  return (
    <>
      <Row className="align-center">
        <Col>
          <h1>Jobs</h1>
        </Col>
      </Row>
      <div>
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </>
  );
}
