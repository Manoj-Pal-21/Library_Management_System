import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/Signup';
import AllBooks from '../components/AllBooks';
import App from './App';
import { isAuthenticated } from '../utils/Auth';

const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/sign-in" replace />
    );
};

const PublicRoute = ({ element, ...rest }) => {
    return !isAuthenticated() ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/home" replace />
    );
};

const RoutesConfig = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <PrivateRoute path="/home" element={<Home />} />
                <PublicRoute path="/sign-in" element={<Login />} />
                <PublicRoute path="/sign-up" element={<SignUp />} />
                <PrivateRoute path="/all-books" element={<AllBooks />} />
            </Route>
        </Routes>
    </Router>
);

export default RoutesConfig;
