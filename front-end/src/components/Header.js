import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css';

const Header = (props) => {    
   
    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Anywhere Fitness</Link>
                <Link className="link" to='/classes'>Browse Classes</Link>
             
            </div>
            <div className="right-links">

                {(props.isLoginPage && !props.isLoggedIn ) && 
                    <div className="link"  > <span>Need a account? &nbsp; </span> <Link to='/register' >Register</Link></div>}
                {(!props.isLoginPage && !props.isLoggedIn ) &&  
                    <div className="link" > <span>Already a member? &nbsp; </span> <Link to='/login' >  Login </Link> </div>}                
                                     
                {(props.role === 'instructor' && props.isLoggedIn) && 
                    <Link className="link" to='/create'>Create a Class</Link>}  
              
                {props.isLoggedIn && 
                    <Link className="link" to='/logout'>Logout</Link>}              
                     
            </div>
        </nav>
    )
}

export default Header;