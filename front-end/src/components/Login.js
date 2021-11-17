import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
//import Header from "./Header";
//import Footer from "./Footer";
import * as yup from "yup";
//import "./Login.css";

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

        return (
            <div class="container">
            <div style={{ color: "red"}}>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
                <form>
                    <div className="header-section">
                        {/*<Header />*/}
                    </div>
                    <h1 class= "mb-3">Please sign in</h1>
                    <label for="username" class="sr-only mb-4"> 
                        <input 
                            onChange={change} 
                            value ={formState.value}
                            name="username"
                            type="text"
                            id="username"
                            class="form-control"
                            placeholder="Username"
                            required autofocus>
                            </input>
                    </label>
                    { errors.username.length > 0 && <p className="error">{errors.username}</p> }
                    <label for="password">
                            <input
                            onChange={change}
                            value={formState.password}
                            name="password"
                            type="text"
                            id="password"
                            class="form-control mb-4"
                            placeholder="Password"
                            required autofocus>
                            </input>
                    </label>
                    <button disabled={disabled} class="btn btn-lg btn-primary btn block">Sign In</button>
                    <div className="footer-page">
                        {/*<Footer/> */}
                    </div>
                </form>
            </div>
        ) 
}
