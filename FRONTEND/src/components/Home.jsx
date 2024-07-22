import React from 'react';


const Home = () => {
  const username = "raj pal";
  const isAdmin = false;

  return (
    <div className="container">
      <div className="card text-center">
        <h2>Welcome, {username}!</h2>
        {isAdmin ? <p>You are an admin.</p> : <p>You are not an admin.</p>}
      </div>
    </div>
  );
}

export default Home;
