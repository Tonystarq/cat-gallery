import React from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ isDark, onToggle }) => {
    return (
        <div className="theme-toggle">
            <button 
                className="theme-toggle-btn"
                onClick={onToggle}
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
                {isDark ? '☀️' : '🌙'}
            </button>
        </div>
    );
};

export default ThemeToggle;