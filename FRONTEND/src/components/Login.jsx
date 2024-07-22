import React, { useState } from 'react';
import { useDispatch } from 'react-redux';;
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUser, setError } from '../redux/slice/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { username, password });
      dispatch(setUser(response.data));
      navigate('/home');
    } catch (error) {
      dispatch(setError(error.response.data.message));
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner p-4 shadow">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

