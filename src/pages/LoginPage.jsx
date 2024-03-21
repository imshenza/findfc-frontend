// src/pages/LoginPage.js
import React from 'react';
import Header from '../components/Header';
import './LoginPage.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const SubmitEvent = () => {
    // Handle submit logic here
  };

  return (
    <div>
      <Header />
      <div className='loginpage'>
        <h1 className='head'>Login</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" name='username' placeholder='Enter your username' />
          </div> <br />

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' placeholder='Enter your password' />
          </div> <br />
          <Link to="/admin">
            <button type="button" onClick={SubmitEvent}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;
