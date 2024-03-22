// src/pages/LoginPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import './LoginPage.css';
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(""); // State to store error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      });
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        navigate('/');
        // window.location.href = '/';
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-800">
          <form className="space-y-6 max-w-md mx-auto" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Login
            </h3>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
            <div className="form-group">
              <label htmlFor="username" className="label">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="input"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
