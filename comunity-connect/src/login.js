import React, { useState } from 'react';
import './css/login.css';
import { login_cek } from './function/cek_login.js';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function btnSubmit(event) {
        event.preventDefault();
        login_cek(email, password);
    }

     (
        <main>
            <h2>Login</h2>
            <form onSubmit={btnSubmit}>
                <label>Email:
                 return   <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br/>
                <button type='submit' >Login</button>
            </form>
            <p>Don't have an account? <a href="google.com">Sign Up</a></p>
        </main>
    );
}

export default Login;
