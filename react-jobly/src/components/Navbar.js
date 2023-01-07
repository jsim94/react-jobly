import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>React Jobly</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/jobs">
              <Nav.Link>Jobs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/companies">
              <Nav.Link>Companies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
