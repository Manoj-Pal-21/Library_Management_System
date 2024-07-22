import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slice/auth';


const Home = () => {
  const user = useSelector(selectUser);

  return (
    <div className="container">
      <div className="card text-center">
        <h2>Welcome, {user.user.username}!</h2>
        {user.user.isAdmin ? <p>You are an admin.</p> : <p>You are not an admin.</p>}
      </div>
    </div>
  );
}

export default Home;
