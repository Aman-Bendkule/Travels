import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Add the CSS file for styling
import logo from '../assets/arohitravels.png'

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('isAdmin', true);
            navigate('/dashboard');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <div className="login-form">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                        className="input-field"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className="input-field"
                    />
                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
