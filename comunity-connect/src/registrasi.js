import React, { useState } from 'react';
import './css/login.css';
import { login_cek } from './function/cek.js';

function Sign(){
    function btnSubmit(event) {
        event.preventDefault();
        registrasi_cek(username, email, password);
    }

    return (
        <main>
            <h1>Registrasi</h1>
            <form onSubmit={btnSubmit}>
                <label htmlFor="username"></label>
                <input type='text'>Username</input>

                <label htmlFor="email"></label>
                <input type='email'>Email</input>

                <label htmlFor="password"></label>
                <input type='password'>Password</input>

                <button type='submit'>Sign up</button>
            </form>
        </main>
    );
}