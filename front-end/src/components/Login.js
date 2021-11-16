import react from "react";

export default class Login extends Component {
    render () {
        return (
            <div class="container">
                <form>
                    <h1>Please sign in</h1>
                    <label class="username">
                        <input
                        type=""
                        id="username"
                        placeholder="Username"
                        required autofocus>
                        </input>
                    </label>
                    <label class="password">
                        <input
                        type=""
                        id="password"
                        placeholder="Password"
                        required autofocus>
                        </input>
                    </label>
                </form>
            </div>
        )
    }
}
