import React from 'react';


export default function Register (props) {
    

    const { values, submit, change, disbaled, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Register here!</h2>

                <button disabled={disbaled}>submit</button>

                <div className="errors">
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                    <div>{errors.role}</div>
                </div>
            </div>
            <div className="form-group submit">
                <h4>Enter information below</h4>

                <label>Username
                    <input
                    value = {values.username}
                    onChange = {onChange}
                    name = 'username'
                    type ='text'
                    placeholder = 'Please enter a username'
                    />
                </label>
                <label>Password
                    <input 
                    value = {values.password}
                    onChange = {onChange}
                    name = 'password'
                    type = 'password'
                    placeholder = 'Please enter a password'
                    />
                </label>
                <label>Role
                    <select
                    onChange = {onChange}
                    value = {values.role}
                    name = 'role'
                    >
                        <option value =''>--select an option--</option>
                        <option value ='student'>student</option>
                        <option value ='instructor'>instructor</option>
                    </select>
                </label>
            </div>
        </form>
    )
}
