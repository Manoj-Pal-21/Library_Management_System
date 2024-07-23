import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';
import AllBooks from '../pages/book/AllBooks';
import App from './App'


const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/sign-in',
                element: <Login />,
            },
            {
                path: '/sign-UP',
                element: <SignUp />,
            },
            {
                path: '/all-books',
                element: <AllBooks />,
            },
        ],
    },
]);

export default Router;
