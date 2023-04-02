import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/">Mahmud</Navbar.Brand>
                <div></div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                    <Nav
                        className=" my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/">Home</NavLink></Nav.Link >
                        <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/about">About</NavLink></Nav.Link >
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavScrollExample;