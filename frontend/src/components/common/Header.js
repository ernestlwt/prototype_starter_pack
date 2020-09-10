import React from 'react';

import { Link } from 'react-router-dom';

import {
    Container,
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';


export default function Header() {

    return(
<Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand as={Link} to="/">My Prototype</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Item1</Nav.Link>
                <Nav.Link as={Link} to="/">Item2</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <NavDropdown title="Dropdown List" id="nav-user-dropdown">
                    <NavDropdown.Item as={Link} to="/">Page1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/">Page2</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
    )
}
