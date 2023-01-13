import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { JoblyApi } from "../api/";
import { CompanyCard, ListSearch } from "../components";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const populateCompanies = async (q) => {
    setCompanies(await JoblyApi.getCompanies(q));
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
