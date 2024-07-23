import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteCookie } from '../../utils/Cookie';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        deleteCookie('token')
        navigate('/sign-in')

    }

    return (
        <header>
            <div className="logo_container">
                <span className="action_name">Library Management System</span>
            </div>
            <nav className="nav_bar">
                <div className='link'>
                    <Link to='/all-books'>All books</Link>
                </div>
                <div className='link'>
                    <Link to='/all-books'>Issued books</Link>
                </div>
                <div className='link'>
                    <Link to='/all-books'>Recommended books</Link>
                </div>
                <div className='link'>
                    <Link to='/all-books'>Trendings</Link>
                </div>
                <div className='link'>
                    <Link to='/all-books'>Community</Link>
                </div>
            </nav>
            <div className="action_bar">
                <div className="action_container">
                    <p onClick={handleLogout} className="action_name">LOGOUT</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar;