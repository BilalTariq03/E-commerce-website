import React from 'react';
import '../assets/styles/Button.css';

export default function Button({ children, ...props }) {
    return (
        <button className="form-button" {...props}>
            {children}
        </button>
    );
}