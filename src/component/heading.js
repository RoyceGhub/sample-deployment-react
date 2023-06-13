import {Nav,Navbar, NavDropdown, Container} from 'react-bootstrap'
import HeaderImage from "./../images/1.png"
const  Heading = () => {
    return (
        <div>
        <Navbar className="p-3 mb-2 bg-dark bg-gradient text-warning" sticky="top" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            <img src={HeaderImage} className='w-100' alt=""/>
    </div>
      );
}
 
export default Heading;