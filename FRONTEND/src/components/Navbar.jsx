import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">

                    <div className='row'>
                        <div className='col col-12 col-sm-3 col-md-4'>
                            <div className='sidebar'>
                                <div className='links'>
                                    <Link className="navbar-brand" to={'/sign-in'}>
                                        Library Management System
                                    </Link>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
