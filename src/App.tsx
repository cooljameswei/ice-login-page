import React from 'react';
import logo from './logo.svg';
import './app.scss';
import logoimg from './assets/logo.png';
function App() {
    return (
        <div className="App">
            <div className="logo-img">
                <img src={logoimg} />
            </div>
        </div>
    );
}

export default App;
