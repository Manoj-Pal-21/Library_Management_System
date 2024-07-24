import React from 'react'
import { selectUser } from '../redux/slice/auth';
import { useSelector } from 'react-redux';

const UserPanel = () => {
    const { user } = useSelector(selectUser);
   
    return (
        <div className="container-home">
            <div className="card text-center">
                <h2>Welcome, {user?.username}!</h2>
                {user?.isAdmin ? <p>You are an admin.</p> : <p>You are not an admin.</p>}
            </div>
        </div>
    );
}

export default UserPanel
