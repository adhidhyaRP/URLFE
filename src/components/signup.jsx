// Signup.js
import React, { useState } from 'react';
import '../App.css';  // Import the CSS file
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const {username,email,password}= form
   
   Axios.post("https://urlwithsignupverify.onrender.com/auth/signup",{username,email,password}).then(response=>{
  alert("we send a verification link to your gmail")
  
   }).catch(err=>{
    console.log(err)
   })

  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <p>have an account already? <Link to="/login">login</Link></p>

      </form>
      
    </div>
  );
};

export default Signup;
