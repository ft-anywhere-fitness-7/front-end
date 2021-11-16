import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


const Header = (props) => {
    const { role, isLoggedIn } = props;

    const isLoggedIn = true;
    const role = "admin";

    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Home</Link>
            </div>
            <div className="right-links">
                {!isLoggedIn && <Link className="link" to='/signup'>Signup</Link>}
                {!isLoggedIn && <Link className="link" to='/login'>Login</Link>}
                {(role === 'admin' && isLoggedIn) && <Link className="link" to='/courses'>Classes</Link> }
                {(role === 'admin' && isLoggedIn) && <Link className="link" to='/createCourse'>Create a Class</Link>}                
            </div>
        </nav>
    )
}
export default Header;
