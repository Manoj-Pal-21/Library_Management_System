import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';
import AllBooks from '../pages/book/AllBooks';
import App from './App'
import PrivateRoute from './PrivateRoute';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <PrivateRoute element={<Home />} />,
            },
            {
                path: '/sign-in',
                element: <PrivateRoute element={<Login />} />,
            },
            {
                path: '/sign-UP',
                element: <PrivateRoute element={<SignUp />} />,
            },
            {
                path: '/all-books',
                element: <PrivateRoute element={<AllBooks />} />,
            },
        ],
    },
]);

export default Router;
