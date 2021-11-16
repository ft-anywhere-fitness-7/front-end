import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


export default class Header extends Component {
    render () {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">Anywhere Fitness</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="login">Sign In</Nav.Link>
                        <Nav.Link href="register">Register</Nav.Link>
                        <Nav.Link href="classes">Classes</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
