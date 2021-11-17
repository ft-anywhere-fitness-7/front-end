import React from 'react';
import validate from './validation';
import useRegister from './useRegister';



const Register = ({ submitRegister }) => {
    const { handleChange, handleSubmit, values, errors} = useRegister(submitRegister, validate)

    return (
        <form className="form container" >
            <div className="form-group submit">
                <h2>Register here!</h2>

            </div>
            <div className="form-group submit">
                <h4>Enter information below</h4>

                <label className="form-label">Username
                    <input
                    value = {values.username}
                    onChange = {handleChange}
                    name = 'username'
                    type ='text'
                    placeholder = 'Please enter a username'
                    />
                </label>
                {errors.username && <p>{errors.username}</p>}
                <label className="form-label">Password
                    <input 
                    value = {values.password}
                    onChange = {handleChange}
                    name = 'password'
                    type = 'password'
                    placeholder = 'Please enter a password'
                    />
                </label>
                {errors.password && <p>{errors.password}</p>}
                <label className="form-label">Password
                    <input 
                    value = {values.password2}
                    onChange = {handleChange}
                    name = 'password2'
                    type = 'password'
                    placeholder = 'Please enter a password'
                    />
                </label>
                {errors.password2 && <p>{errors.password2}</p>}
                <label className="form-label">Role
                    <select
                    value = {values.role}
                    onChange = {handleChange}
                    name = 'role'
                    >
                        <option value =''>--select an option--</option>
                        <option value ='student'>student</option>
                        <option value ='instructor'>instructor</option>
                    </select>
                </label>
                {errors.role && <p>{errors.role}</p>}
                <button onClick={handleSubmit} className="form-input-btn" type="submit">Submit</button>
                <span className="form-input-login">Already have an account? Login <a href="Login">here</a></span>
            </div>
        </form>
    )
}


export default Register;