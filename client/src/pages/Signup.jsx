import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Signup.css';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/signup', { username, email, password });
            console.log(res.data);
            if (res.data.success) {
                console.log('success');
                setMessage('Signup successful!');

                setError('');
                setTimeout(() => navigate('/'), 1500);
            } else {
                setError(res.data.message);
                setMessage('');
            }
        } catch (err) {
            setError('Server error. Try again.');
            setMessage('');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2 className="signup-title">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSignup}>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
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
                    {message && <div className="success-message" role="alert">{message}</div>}
                    {error && <div className="error-message" role="alert">{error}</div>}
                    <Button type="submit">Sign Up</Button>
                </form>
                <p className="signup-link-text">Already have an account? <a className="signup-link" href="/">Login</a></p>
            </div>
        </div>
    );
}
