// Login.js
import React, { useState } from 'react';
import '../App.css';  // Import the CSS file
import Axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';



const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate()
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email,password}= form
   
   Axios.post("https://url-jj42.onrender.com/auth/login",{email,password}).then(response=>{
   if(response.data.status){
    localStorage.setItem("authorised",true)
    navigate('/')
   } 
  console.log(response.data)
    
   }).catch(err=>{
    console.log(err)
   })
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
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
        <button type="submit" className="login-button">Login</button>
        <Link to='/forgotpassword' >forgot password</Link>
        <Link to='/signup' style={{float:"right"}}>Create a account</Link>
      </form>
    </div>
  );
};

export default Login;
