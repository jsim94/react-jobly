import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function CompanyCard({ company }) {
  return (
    <Card className="mb-2">
      <Card.Header as="h5" className="bg-secondary text-light">
        {company.name}
        <LinkContainer
          to={`/companies/${company.handle}`}
          className="float-end"
        >
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
  );
}
