import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'

const Logout = (props)=> {
    
    console.log('props in Logout.js: ', props);
    console.log('useHistory: ', useHistory());

    const { push } = useHistory();
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("message");
    props.setIsLoggedIn(localStorage.getItem('token'));
    props.setIsLoginPage(true);
    props.setIsRegPage(false);
    props.setIsHomePage(false);

    push ("/login");       
       
        return(<div></div>);
    
}

export default Logout;