import React, { Component } from "react";

class Login extends Component {
    render() {
        return (
            <div id="container-login">
                <div id="title">
                    <i class="material-icons lock">Login</i>
                </div>

                <form>
                    <div class="input">
                        <div class="input-addon">
                            <i class="material-icons">username</i>
                        </div>
                        <input id="username" placeholder="Username" type="text" required class="validate" autocomplete="off"></input>
                    </div>

                    <div class="clearfix"></div>

                    <div class="input">
                        <div class="input-addon">
                            <i class="material-icons">Password</i>
                        </div>
                        <input id="password" placeholder="Password" type="password" required class="validate" autocomplete="off"></input>
                    </div>

                    <div class="remember-me">
                        <input type="checkbox"></input>
                        <span >Remember Me</span>
                    </div>

                    <input type="submit" value="Log In" />
                </form>


            </div>
    

    );
    }
}

export default Login;