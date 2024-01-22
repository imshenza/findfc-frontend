import React from 'react'
import './LoginPage.css';
import BackButton from '../components/BackButton';

const LoginPage = () => {
  return (
   <div className="login">
    
    <BackButton/>
     <div className='loginpage'>
        <form action="">
        <h1>Login</h1>
        <div className="user-name"><label htmlFor="username">Username</label>
        <input type="text" name='username' placeholder='Enter your username' /></div>
        <div className="password">
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='Enter your password'/>
        </div>
        <button type="button" onClick={SubmitEvent} id='login-button'>
          Submit
        </button>
        </form>
    </div>
   </div>
  )
}

export default LoginPage