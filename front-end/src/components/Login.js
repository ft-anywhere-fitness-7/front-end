import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

// can not replace real url in post, figure out later
import { BASE_URL, API_KEY } from '../utils/URL';  

console.log('BASE_URL: ', BASE_URL);

export default function Login (props){

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
            // console.log('I am click the login button'); 
            axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/login`, login)  
                .then(resp => {                    
                    // console.log('resp.data: ', resp.data);
                    // console.log('props in Login:', props);
                    localStorage.setItem('token', resp.data.token);
                    localStorage.setItem('role', resp.data.role);
                    localStorage.setItem('message', resp.data.message);
                    push('/classes');                    
                })
                .catch(err => {
                    console.log(err);                
                })
        }

        return (
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <h1 className= "mb-3">Please sign in</h1>
                    <label htmlFor="username" className="sr-only mb-4"> 
                            <input 
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={login.username}
                                onChange={handleChange}
                            />
                    </label>
                    <label htmlFor="password">
                            <input 
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={login.password}
                                onChange={handleChange}
                            />
                    </label>
                    <button className="btn btn-lg btn-primary btn block">Sign In</button>
                </form>
            </div>
        )
}