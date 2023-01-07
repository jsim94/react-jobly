import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import joblyApi from "../api/JoblyApi";
import ListSearch from "../components/ListSearch";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  const searchCallback = async (q) => {
    setCompanies(await joblyApi.getCompanies(q));
  };

  return (
    <>
      <Row className="align-center">
        <Col>
          <h1>Companies</h1>
        </Col>
        <Col>
          <ListSearch callback={searchCallback} />
        </Col>
      </Row>
      <div>
        {companies.map((company) => (
          <Card key={company.handle} className="mb-2">
            <Card.Header as="h5" className="bg-secondary text-light">
              {company.name}{" "}
              <LinkContainer to={`/companies/${company.handle}`}>
                <Button size="sm">Learn More</Button>
              </LinkContainer>
            </Card.Header>
            <Card.Body>
              <p>
                <strong>About: </strong>
                {company.description}
              </p>
              <p>
                <strong>Employees: </strong>
                {company.numEmployees}
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
