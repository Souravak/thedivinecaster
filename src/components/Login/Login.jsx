import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import firebase from '../../firebase';
import './Login.css';

const auth = firebase.auth();

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const email = username + '@gmail.com';
            const response = await auth.signInWithEmailAndPassword(email, password);
            if (response.user) {
                const controllerData = JSON.parse(sessionStorage.getItem('controllerData') || 'null');
                const time = controllerData && Number.isFinite(Number(controllerData.duration)) ? Number(controllerData.duration) * 60 : 0; // seconds
                alert('Auto Logout in '+time+' seconds');
                onLoginSuccess();
            }
        } catch (error) {
            alert('You are not authorized to view data');
            window.location.reload();
            // console.error('Authentication Error:', error);
        }
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <section id="loginPage">
                <h1 className="loginPageTitle">Private Data Login</h1>
                <div className="login-form">
                    <div className="login-description">
                        Please enter username and password
                    </div>
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
