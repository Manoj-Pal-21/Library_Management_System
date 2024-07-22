import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
// import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="logo_container">
                <Link to="/home">Library Management System</Link>
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
                    <IoPerson />
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    <FaHeartbeat />
                    <span className="action_name">Wishlist</span>
                </div>
            </div>
        </header>
    )
}

export default Header