import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Login (props){
  
        return (
            <div class="container">
                <form>
                    <div className="header-section">
                        <Header />
                    </div>
                    <h1 class= "mb-3">Please sign in</h1>
                    <label for="username" class="sr-only mb-4"> 
                        <input
                            type="username"
                            id="username"
                            class="form-control"
                            placeholder="Username"
                            required autofocus>
                            </input>
                    </label>
                    <label for="password">
                            <input
                            type="password"
                            id="password"
                            class="form-control mb-4"
                            placeholder="Password"
                            required autofocus>
                            </input>
                    </label>
                    <button class="btn btn-lg btn-primary btn block">Sign In</button>
                    <div className="footer-page">
                        <Footer/>
                    </div>
                </form>
            </div>
        )
}
