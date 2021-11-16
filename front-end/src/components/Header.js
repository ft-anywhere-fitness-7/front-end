import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = (props) => {
    
    const isLoggedIn = true;
    const role = "admin";


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

export default Header;
