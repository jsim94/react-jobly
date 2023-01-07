import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-5 fw-bold">Welcome to Jobly</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Get started applying for your dream job!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <LinkContainer to="/jobs">
            <button className="btn btn-outline-dark btn-lg px-4 gap-3">
              Jobs
            </button>
          </LinkContainer>
          <LinkContainer to="/companies">
            <button className="btn btn-outline-dark btn-lg px-2">
              Companies
            </button>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
}
