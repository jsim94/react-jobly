import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import joblyApi from "../api/JoblyApi";
import JobCard from "../components/JobCard";
import ListSearch from "../components/ListSearch";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  const populateJobs = async (q) => {
    setJobs(await joblyApi.getJobs(q));
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
        <Col>
          <ListSearch callback={populateJobs} />
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
