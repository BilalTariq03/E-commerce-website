import React from 'react';
import '../assets/styles/Input.css';

export default function Input({ type = 'text', ...props }) {
    return <input className="form-input" type={type} {...props} />;
}