import { Card } from "react-bootstrap";
import addCommas from "../helpers/addCommas";

export default function JobCard({ job }) {
  return (
    <Card className="mb-2">
      <Card.Header as="h5" className="bg-secondary text-light">
        {job.title}
      </Card.Header>
      <Card.Body>
        <p>
          <strong>Salary: </strong>${addCommas(job.salary || 0)}
        </p>
        <p>
          <strong>Equity: </strong>
          {job.equity || 0}
        </p>
      </Card.Body>
    </Card>
  );
}
