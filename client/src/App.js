import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Board from './components/Board';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Board user={user} onLogout={handleLogout} />
            )}
        </div>
    );
}

export default App;