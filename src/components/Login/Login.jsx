import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from '../../FirebaseConfig/FirebaseConfig';
import './Login.css';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get authentication instance

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const email = username + '@gmail.com';
            const response = await signInWithEmailAndPassword(auth, email, password);
            if (response.user) {
                const controllerData = JSON.parse(sessionStorage.getItem('controllerData'))
                var time = +controllerData.duration; // in minutes
                time = time*60; // in seconds
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
                <h1 className="loginPageTitle">Login</h1>
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
