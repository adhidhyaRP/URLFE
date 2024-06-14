import React, { useState } from 'react';
import '../App.css';  // Import the CSS file
import Axios from 'axios';
import { useNavigate,Link, useParams } from 'react-router-dom';

const Resetpassword = () => {
    const [form, setForm] = useState({
        
        password: ''
      });

     const {id,token} = useParams()
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };
      const navigate = useNavigate()
     

      const handleSubmit = (e) => {
        e.preventDefault();
        const {password}= form
        Axios.post(`https://url-jj42.onrender.com/auth/resetpassword/${id}/${token}`,{password})
        console.log(password,id,token)
        navigate("/login")
      }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Reset Password</h2>
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
        </form>
    </div>
  );
};
   

export default Resetpassword