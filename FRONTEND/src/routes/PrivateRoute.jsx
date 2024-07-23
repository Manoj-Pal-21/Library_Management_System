import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/Cookie';


const PrivateRoute = ({ element }) => {
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/");
    else navigate("/sign-in");
  }, [])

  return element;
}

export default PrivateRoute
