import React, { useState } from 'react';

export default function Register () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleUsername = evt => {
        setUsername(evt.target.value);
        setSubmitted(false);
    };

    const handlePassword = evt => {
        setPassword(evt.target.value);
        setSubmitted(false);
    };

    const handleRole = evt => {
        setRole(evt.target.value);
        setSubmitted(false);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (username === '' || password === ''){
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    const successMessage = () => {
        return (
            <div className="success" style ={{display: submitted ? '' : 'none',}}>
                <h1>{username} successfully registered!</h1>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="error" style={{display: error ? '' : 'none',}}>
                <h1>Please fill out all fields.</h1>
            </div>
        )
    }



    return (
        <form className="form container" >
            <div className="form-group submit">
                <h2>Register here!</h2>

                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
            </div>
            <div className="form-group submit">
                <h4>Enter information below</h4>

                <label>Username
                    <input
                    value = {username}
                    onChange = {handleUsername}
                    name = 'username'
                    type ='text'
                    placeholder = 'Please enter a username'
                    />
                </label>
                <label>Password
                    <input 
                    value = {password}
                    onChange = {handlePassword}
                    name = 'password'
                    type = 'password'
                    placeholder = 'Please enter a password'
                    />
                </label>
                <label>Role
                    <select
                    onChange = {handleRole}
                    value = {role}
                    name = 'role'
                    >
                        <option value =''>--select an option--</option>
                        <option value ='student'>student</option>
                        <option value ='instructor'>instructor</option>
                    </select>
                </label>
                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
            </div>
        </form>
    )
}
