import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'

const Logout = (props)=> {
    console.log('props in Logout.js: ', props);
    console.log('useHistory: ', useHistory());

    const { push } = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        localStorage.removeItem("token");
        push ("/login");       
       
        return(<div></div>);
    })
}

export default Logout;