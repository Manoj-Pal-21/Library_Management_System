import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/Cookie';
import { resetRedux } from '../redux/store';



const PrivateRoute = ({ element }) => {
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/");
    else {
      resetRedux();
      navigate("/sign-in")
    };
  }, [])

  return element;
}

export default PrivateRoute
