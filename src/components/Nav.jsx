import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand href="#home">Event</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/eventlist">Events</Link>
            <Link to="/eventlist">Account</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}