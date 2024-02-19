import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(username === 'sourav' && password === 'maverics'){
            // use this checking to firebase database for security
            // or find another way to secure the login
            alert('Welcome Sir');
            onLoginSuccess();

        } else {
            alert('You are not authorized to view data');
            window.location.reload();
        }
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <>
        <section id="loginPage">
            <h1 className="loginPageTitle">Login</h1>
            <div className="login-form">
                <div className="login-inputs">
                    <input type="text" className="username" placeholder="Username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" className="password" placeholder="Password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login-buttons">
                    <button onClick={handleReset} className="btn btn-danger">Reset</button>
                    <button onClick={handleLogin} className="btn btn-success">Login</button>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default Login;
