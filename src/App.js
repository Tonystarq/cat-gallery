import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <Router>
            <div className="app">
                <div className="container">
                    <ThemeToggle 
                        isDark={isDarkMode} 
                        onToggle={() => setIsDarkMode(!isDarkMode)} 
                    />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
