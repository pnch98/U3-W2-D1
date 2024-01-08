import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav(props) {
  return (
    <Navbar fluid className="bg-info position-sticky top-0 z-1000">
      <Container>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>

        <Nav>
          <Nav.Link href="#" className="me-auto">
            {props.mainLink}
          </Nav.Link>
          <Nav.Link href="#">{props.link2}</Nav.Link>
          <Nav.Link href="#">{props.link3}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
