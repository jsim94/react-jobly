import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import joblyApi from "../api/JoblyApi";
import CompanyCard from "../components/CompanyCard";
import ListSearch from "../components/ListSearch";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const populateCompanies = async (q) => {
    setCompanies(await joblyApi.getCompanies(q));
  };

  useEffect(() => {
    populateCompanies();
  }, []);

  return (
    <>
      <Row className="align-center">
        <Col>
          <h1>Companies</h1>
        </Col>
        <Col>
          <ListSearch callback={populateCompanies} />
        </Col>
      </Row>
      <div>
        {companies.map((company) => (
          <CompanyCard company={company} key={company.handle} />
        ))}
      </div>
    </>
  );
}
