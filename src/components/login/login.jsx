// src/Login.js
import React, { useState } from 'react';
import './login.css';
import { useHistory } from "react-router-dom";
import Signin from '../signin/signin';


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Replace with your authentication logic
        if (username === 'user' && password === 'password') {
            onLogin(true);
        } else {
            setError('Invalid credentials');
        }
    };
    const handleSignupClick = () => {
        history.push("/signup");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" >Login  </button><br />
                {"."}
                <button type="submit" onClick={handleSignupClick}>SignUp  </button><br />

            </form >
        </div >
    );
};

export default Login;
