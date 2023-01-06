import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Jobly</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/jobs">
            <Nav.Link>Jobs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/companies">
            <Nav.Link>Companies</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
