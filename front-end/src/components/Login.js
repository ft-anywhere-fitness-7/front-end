import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../CSS/Login.css'
// can not replace real url in post, figure out later
import { BASE_URL, API_KEY } from '../utils/URL';  

// console.log('BASE_URL: ', BASE_URL);

export default function Login (props){
        const { setIsLoggedIn } = props; 
        console.log('props in Login.js: ', props);
        const { push } = useHistory();

        const [login, setLogin] = useState({
            username: '',
            password: ''
        })

        const handleChange = (e) => {
            setLogin({
                ...login,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            
            axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/login`, login)  
                .then(resp => {                    
                    
                    localStorage.setItem('token', resp.data.token);                    
                    localStorage.setItem('role', resp.data.role);
                    localStorage.setItem('message', resp.data.message);
                    props.setIsLoggedIn(localStorage.getItem('token'));                    
                    push('/users');                    
                })
                .catch(err => {
                    console.log(err);                
                })
        }

        return (<div className="container">
            {/* <Header isLoggedIn = { isLoggedIn } role = { role }  message = { message } /> */}
            <div className="login-container">                
                <form onSubmit={handleSubmit} className="user-pass-form">
                    <h1 className= "signin">Please sign in</h1>
                    <label htmlFor="username" className="sr-only mb-4"> 
                        <input className="user-pass-form-element"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={login.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="user-pass-form-element" htmlFor="password">
                        <input 
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={login.password}
                            onChange={handleChange}
                        />
                    </label>
                    <Link className="login-button-2">Login</Link>
                </form> 
                    <div className="no-account">Don't have an account?
                    <Link className="login-button-3" to='/register'>Register</Link> 
                    {/* <p className="special-p">Don't have an account?<Link className="link-1" to='/register'>Register</Link></p> */}
                    </div>
               
            </div>
        </div>)
}