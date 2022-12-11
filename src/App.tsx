import React from 'react';
import logo from './logo.svg';
import './app.scss';
import logoimg from './assets/logo.png';
function App() {
    return (
        <div className="App">
            <div className="App-logo">
                <img src={logoimg} />
            </div>
            <div className='App-login'>
                <div>
                    <h1 className="App-login-header">Welcome back!</h1>
                </div>
                <div className="App-login-input">
                    <input className="App-login-input-form" type="text" name="address" placeholder="Email Address" />
                    <input className="App-login-input-form" type="text" name="password" placeholder="Password" />
                    <button className="App-login-input-button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default App;
