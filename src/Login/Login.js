
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // External stylesheet for styling

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize the navigation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login details:', formData);

    // Perform login validation here if needed

    // Navigate to the home page after login
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Welcome back! Please login to continue.</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="email">Email</label>
        <input
          className="login-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          className="login-input"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

