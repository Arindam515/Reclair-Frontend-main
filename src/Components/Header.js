import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="..." width={90}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Other Projects
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <Nav>
          <button type="button" class="btn btn-primary">Investment</button>
            <Nav.Link eventKey={2} href="#memes">
    
          
<div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fab fa-linkedin-in"></i></a>
                    
                </div>
         


</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;