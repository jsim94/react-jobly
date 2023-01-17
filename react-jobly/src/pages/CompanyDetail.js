import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { JoblyApi } from "../api";
import { JobCard } from "../components";

export default function CompanyDetail() {
  const [company, setCompany] = useState({
    name: "",
    description: "",
    numEmployees: "",
  });
  const { handle } = useParams();

  useEffect(() => {
    const populateCompany = async () => {
      setCompany(await JoblyApi.getCompany(handle));
    };
    populateCompany();
  }, []);

  return (
    <>
      <h3>{company.name}</h3>
      <Container>
        <p>
          <strong>About: </strong>
          {company.description}
        </p>
        <p>
          <strong>Employees: </strong>
          {company.numEmployees}
        </p>
      </Container>
      <h4>Jobs:</h4>
      <Container>
        {company.jobs
          ? company.jobs.map((job) => <JobCard job={job} key={job.id} />)
          : ""}
      </Container>
    </>
  );
}
