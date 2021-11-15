import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


export default class Header extends Component {
    render () {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Anywhere Fitness</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">Sign In</Nav.Link>
                        <Nav.Link href="#">Register</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}