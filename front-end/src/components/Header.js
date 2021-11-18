import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css';


const Header = (props) => {
    // const { role, isLoggedIn } = props;

    const isLoggedIn = true;
    const role = "instructor";

    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Home</Link>
                {!isLoggedIn && <Link className="link" to='/classes'>Our Classes</Link>}
            </div>
            <div className="right-links">
                {!isLoggedIn && <Link className="link" to='/register'>Signup</Link>}
                {!isLoggedIn && <Link className="link" to='/login'>Login</Link>}               
                {(role === 'instructor' && isLoggedIn) && <Link className="link" to='/create'>Create a Class</Link>}  
                {/* {(role === 'instructor' && isLoggedIn) && <Link className="link" to='/classes'>Classes</Link>} */}
                {isLoggedIn && <Link className="link" to='/logout'>Logout</Link>}
                     
            </div>
        </nav>
    )
}

export default Header;