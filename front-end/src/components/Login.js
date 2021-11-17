import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login (props){

        
  
        return (
            <div className="container">
                <form >
                    <h1 className= "mb-3">Please sign in</h1>
                    <label htmlFor="username" className="sr-only mb-4"> 
                        <input
                            type="username"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            required autoFocus>
                            
                            </input>
                    </label>
                    <label htmlFor="password">
                            <input
                            type="password"
                            id="password"
                            className="form-control mb-4"
                            placeholder="Password"
                            required autoFocus>
                            
                            </input>
                    </label>
                    <button className="btn btn-lg btn-primary btn block">Sign In</button>
                </form>
            </div>
        )
}
