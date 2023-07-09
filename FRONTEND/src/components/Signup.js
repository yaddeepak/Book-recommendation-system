import React, { useState } from "react";
import axios from "axios";
import "./Signup.css"; // Import the CSS file for custom styles


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSignup = async () => {
    try {
      // Make a POST request to the backend API to create a new user
      const signUp='http://localhost:5000/userRoutes/signup';
      const response = await axios.post(signUp, { username, password })
      alert(response.data.message);
      console.log("Signup Success:", response.data.message);
      window.location.href='/login'
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  const clearInput=() => {
      setUsername('');
      setPassword('');
      setConfirmPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    if (password !== confirmPassword) {
      // Password and confirm password do not match
      alert("Passwords do not match");
      clearInput();
      return;
    }
    handleSignup();
    clearInput();
    console.log("Signup:", username, password);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
