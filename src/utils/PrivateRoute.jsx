import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode } from 'jwt-decode';

const useAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        const role = decodedToken.role;
        return role;
    }
    return null;
};

const PrivateRoute = ({ allowedRoles }) => {
    const role = useAuth();
    const isAllowed = role && allowedRoles.includes(role);

    return isAllowed ? <Outlet /> : <Navigate to="/404" />;
};

export default PrivateRoute;
