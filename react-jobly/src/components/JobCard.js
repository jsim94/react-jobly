import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { JoblyApi } from "../api";
import { UserContext } from "../context";
import { addCommas } from "../helpers";

export default function JobCard({ job }) {
  const { user } = useContext(UserContext);
  const [applied, setApplied] = useState(
    user.applications.includes(job.id)
  );

  const handleApply = async () => {
    const res = await JoblyApi.applyForJob(user.username, job.id);

    if (Object.keys(res).includes("applied") && res.applied === job.id) {
      setApplied(true);
    }
  };

  return (
    <Card className="mb-2">
      <Card.Header as="h5" className="bg-secondary text-light">
        {job.title}
        <Button
          size="sm"
          className="float-end"
          disabled={applied}
          onClick={handleApply}
        >
          {applied ? "Applied" : "Apply"}
        </Button>
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
