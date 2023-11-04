import React, { useState } from 'react';
import './css/login.css';
import ReactDOM from 'react-dom';
import { login_cek } from './function/cek.js';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function btnSubmit(event) {
        event.preventDefault();
        login_cek(email, password);
    }

    return (
        <div class = "halaman">
            <div class="photo"><img src="forlogin.jpg"></img></div>
            <div class = "logincontainer">
                <div>
                    <span>Welcome to<br/></span>
                    <div class = "fontwlc2">Community Connect</div>
                </div>
                <div class = "colomlogin"></div>
                <div class = "colomlogin"></div>
                <div class = "checkuser"></div>
                <div class = "colomlogin"></div>
                <div class="toregister">
                    <span>Don’t have an account? </span>
                    <div class="toregisterfont2">Register</div>
                </div>                        
                <h2>Login</h2>
                <form onSubmit={btnSubmit}>
                    <label>Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br/>
                    <button type='submit' >Login</button>
                </form>
                <p>Don't have an account? <a href="google.com">Sign Up</a></p>
            </div>
        </div>
    );
}

export default Login;
