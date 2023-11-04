import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { registrasi_cek } from './function/cek.js';

function Sign() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function btnSubmit(event) {
        event.preventDefault();
        registrasi_cek(username, email, password);
    }

    return (
        <main>
            <h1>Registrasi</h1>
            <form onSubmit={btnSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Sign up</button>
            </form>
        </main>
    );
}

export default Sign;