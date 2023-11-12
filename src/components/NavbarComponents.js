import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavbarComponents = () => {
    return (
        <Navbar variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand href="#home"><strong>Tokodia</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Beranda</Nav.Link>
                        <NavDropdown title="Kategori" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Makanan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cemilan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Minuman</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponents;