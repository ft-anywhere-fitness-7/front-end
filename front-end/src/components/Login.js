import react from "react";

export default function Login (props){
  
        return (
            <div class="container">
                <form>
                    <h1>Please sign in</h1>
                    <label for="username" class="sr-only"> 
                        <input
                        type="username"
                        id="username"
                        class="form-control"
                        placeholder="Username"
                        required autofocus>
                        </input>
                    </label>
                    <label class="password">
                        <input
                        type="password"
                        id="password"
                        class="form-control"
                        placeholder="Password"
                        required autofocus>
                        </input>
                    </label>
                    <button class="btn btn-lg btn-primary btn block">Sign In</button>
                </form>
            </div>
        )
}
