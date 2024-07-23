import React, { useState } from 'react';
import { useDispatch } from 'react-redux';;
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { setUser } from '../redux/slice/auth';
import Cookies from 'js-cookie';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password
      });

      dispatch(setUser(response.data));
      Cookies.set('token', response.data.token, { expires: 7 });
      navigate('/home');
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unexpected error occurred');
      }
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
        <Toaster />
      </div>
    </div>
  );
};

export default Login;

