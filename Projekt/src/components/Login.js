import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setRole }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if ((username === 'admin' && password === 'MlodyBog') || (username === 'user' && password === 'Pomidor123')) {
            setRole(username);
            navigate(username === 'admin' ? '/admin' : '/');
        } else {
            setError('Nieprawidłowa nazwa użytkownika lub hasło.');
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4 shadow" style={{ width: '400px' }}>
                <h2 className="text-center">Logowanie</h2>
                <div className="form-group">
                    <label htmlFor="username">Nazwa użytkownika</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div className="text-danger mt-2">{error}</div>}
                <button className="btn btn-dark mt-3 w-100" onClick={handleLogin}>Zaloguj</button>
            </div>
        </div>
    );
};

export default Login;
