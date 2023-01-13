import { useContext } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../context";

export default function Home() {
  const user = useContext(UserContext);

  if (user.user)
    return (
      <div className="text-center mt-5">
        <h1 className="display-5 fw-bold">
          Welcome back, {user.user.username}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Get started applying for your dream job!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <LinkContainer to="/jobs">
              <Button variant="outline-dark" size="lg">
                Jobs
              </Button>
            </LinkContainer>
            <LinkContainer to="/companies">
              <Button variant="outline-dark" size="lg">
                Companies
              </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    );

  return (
    <div className="text-center mt-5">
      <h1 className="display-5 fw-bold">Welcome to Jobly</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Get started applying for your dream job!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <LinkContainer to="/signup">
            <Button variant="success" size="lg">
              Signup
            </Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button variant="outline-dark" size="lg">
              Login
            </Button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}
