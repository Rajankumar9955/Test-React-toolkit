import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
const Layout=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="incdec">IncrementDecrement</Nav.Link>
            <Nav.Link href="#features">ChangeColor</Nav.Link>
            <Nav.Link href="#pricing">ToDoApp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Outlet/>
      </div>
        
        </>
    )
}
export default Layout;