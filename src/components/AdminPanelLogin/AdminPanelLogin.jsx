import React, { useState } from 'react';
import Footer from '../Footer/Footer';

import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import firebaseConfig from '../../FirebaseConfig/FirebaseConfig';
import './AdminPanelLogin.css';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

const AdminPanelLogin = ({ onAdminLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const email = username + '@thedivinecaster.com';
            if(username === 'admin'){
                const response = await signInWithEmailAndPassword(auth, email, password);
                if (response.user) {
                    onAdminLoginSuccess();
                }
            }
        } catch (error) {
            alert('You are not authorized to update data');
            window.location.reload();
            console.error('Authentication Error:', error);
        }
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <>
            <section id="loginPage">
                <h1 className="loginPageTitle">Admin Login</h1>
                <div className="login-form">
                    <div className="login-description">
                        Please enter Admin Name and Password
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

export default AdminPanelLogin
