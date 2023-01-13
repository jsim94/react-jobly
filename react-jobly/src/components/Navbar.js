import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarComponent({ user, logout }) {
  const handleLogout = () => {
    logout(null);
  };

  const links = user.isLoggedIn ? (
    <>
      <LinkContainer to="/jobs">
        <Nav.Link>Jobs</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/companies">
        <Nav.Link>Companies</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/profile">
        <Nav.Link>Profile</Nav.Link>
      </LinkContainer>
      <Nav.Link className="text-danger" onClick={handleLogout}>
        Logout
      </Nav.Link>
    </>
  ) : (
    <>
      <LinkContainer to="/signup">
        <Nav.Link>Signup</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
    </>
  );

  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>React Jobly</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
