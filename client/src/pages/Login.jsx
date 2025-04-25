import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_BASE}/api/login`, { email, password });
            if (res.data.success) {
                navigate('/home');
            } else {
                setError(res.data.message);
            }
        } catch (err) {
            setError('Server error. Try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <div className="error-message" role="alert">{error}</div>}
                    <Button type="submit">Login</Button>
                </form>
                <p className="login-link-text">Don't have an account? <a className="login-link" href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}

