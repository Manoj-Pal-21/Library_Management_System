import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        username,
        password
      });
      console.log(response)
      if (response.status === 200) {
        navigate("/sign-in")
      }
    } catch (error) {
      if (error.response.status === 400) console.log('400')
      if (error.response.status === 500) console.log('500')
      setErr(error.response.data.message)
    }
  };

  return (
    <div className='container'>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>UserName</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
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
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
            <div>
              <h4>{err}</h4>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default SignUp;
