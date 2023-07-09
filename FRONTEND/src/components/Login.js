import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
 
    const clearInput = () => {
        setUsername("");
        setPassword("");
    };
    const navigate = useNavigate();
    const setTooken = (token) => {
        console.log(token + "y")
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = "myCookie=" + token + "; expires=" + expiryDate.toUTCString() + ";path=/";
    }
 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const login = "http://localhost:5000/userRoutes/login";
            const response = await axios.post(login, { username, password })
            setTooken(response.data.token);
            console.log("Login Success:", response.data);
            clearInput();
            navigate('/books');
            window.location.reload();
 
        } catch (error) {
            console.error("Login Error:", error);
            alert('Invalid username or password !');
            clearInput();
        }
    };
 
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
 
export default Login;
