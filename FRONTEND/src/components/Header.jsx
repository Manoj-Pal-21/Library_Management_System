import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

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
                    <Link to='/sign-in' className="action_name">Login</Link>
                </div>

                <div className="action_container">
                    <Link to='/sign-up' className="action_name">SignUp</Link>
                </div>
            </div>
        </header>
    )
}

export default Header