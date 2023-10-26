import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

function NavBar(props){

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{height: 70, backgroundColor: '#202328'}}>
            <Container>
                <Navbar.Brand href="#home">Alessandro Mancuso </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" className={props.active==='Home' ? 'link active' : 'link'} >
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/AboutMe" className={props.active==='AboutMe' ? 'link active' : 'link'} >
                                About Me
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/EducationJobs" className={props.active==='EdJobs' ? 'link active' : 'link'}>
                                Education & Jobs
                            </Link>
                         </Nav.Link>
                        <Nav.Link>
                            <Link to="/Skills" className={props.active==='Skills' ? 'link active' : 'link'}>
                            Technical skills
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="My Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;