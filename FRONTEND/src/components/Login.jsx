import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: username,
      password: password
    }

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', payload);   
      const isAdmin = response.data.isAdmin
      isAdmin ? navigate("/home") : navigate("/all-books")
    } catch (error) {
      console.error('Error submitting login:', error);
    }
  };


  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleFormSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p className="forgot-password text-right">
              Not registered <a href="/sign-up">sign up?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
