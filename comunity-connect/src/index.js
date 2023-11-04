import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LOGIN from './login';
import REGISTRASI from './registrasi';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <div>
      <LOGIN/>
      <REGISTRASI/>
    </div>
  </React.StrictMode>, root
);
