import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../CSS/Register.css';

export default function Register (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const { push } = useHistory();

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        department: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
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
        <form className="form-container" >
            <div className="form-group submit">
                <h2>Register here!</h2>

                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
            </div>
            <div className="form-group submit">
                <h6>Enter information below</h6>

                <label className="form-label">Username
                    <input
                    className ="form-input"
                    value = {username}
                    onChange={handleChange}
                    name = 'username'
                    type ='text'
                    placeholder = 'Please enter a username'
                    />
                </label>
                <label> Department:
                    <select name="department" onChange={handleChange}>
                        <option value="">---Select your role---</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </label>
                <label className="form-label">Role
                    <select
                    className ="form-role"
                    onChange={handleChange}
                    value = {role}
                    name = 'role'
                    >
                        <option value =''>--select an option--</option>
                        <option value ='student'>Student</option>
                        <option value ='instructor'>Instructor</option>
                    </select>
                </label>
                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
            </div>
        </form>
    )
}
