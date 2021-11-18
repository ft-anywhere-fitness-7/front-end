import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';


const formSchema = yup.object().shape({
    username: yup
        .string()
        .label("Username")
        .required("Must include username"),
    password: yup
        .string()
        .required("Password is Required")
        .min(6, "Passwords must be at least 6 characters long")
}); 

export default function Login (props){

    const [formState, setFormState] = useState({
        username:"",
        password:""
    });

    const [errors, setErrors] = useState({
        username:"", 
        password:""
    })

    const [disabled, setDisabled] = useState(true);  

    const setFormErrors = (name, value) => {
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
            setErrors({
                ...errors, [name]:""
            });
        })
        .catch(err => {
            setErrors({
                ...errors, [name]: err.errors[0]
            });
        });
    }

    const change = evt => {
        const { checked, value, name, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        setFormErrors(name, valueToUse)
        setFormState({ ...formState, [name]: valueToUse})
    }   

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setDisabled(!valid); 
        });
    }, [formState]);

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
            console.log('I am click the login button'); 
            axios.post(`https://ft-anywherefitness-7.herokuapp.com/api/auth/login`, login)  
                .then(resp => {
                    // debugger
                    console.log('resp.data.token: ', resp.data.token);
                    
                })
                .catch(err => {
                    console.log(err);                
                })
        }


        return (
            <div class="container">
            <div style={{ color: "red"}}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
                <form onSubmit={handleSubmit}>
                    <h1 class= "mb-3 mt-5 pt-5 pb-3 mx-auto">Please sign in</h1>
                    <label for="username" class="sr-only mb-5 pb-5"> 
                        <input 
                            onChange={handleChange} 
                            value ={formState.value}
                            name="username"
                            type="text"
                            id="username"
                            class="form-control"
                            placeholder="Username"
                            required autofocus
                            />
                    </label>
                    <label for="password" class="sr-only mb-5 pb-5">
                            <input
                            onChange={handleChange}
                            value={formState.password}
                            name="password"
                            type="text"
                            id="password"
                            class="form-control mb-4"
                            placeholder="Password"
                            required autofocus
                            />
                    </label>
                    <button disabled={disabled} class="btn btn-lg btn-primary btn block">Sign In</button>
                </form>
            </div>
        ) 
}
