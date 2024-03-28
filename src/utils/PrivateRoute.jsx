import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const useAuth = () => {
    const token = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('token='));
    console.log(token);

    if (token) {
        const decodedToken = jwtDecode(token.split('=')[1].trim());
        const role = decodedToken.role; // Obtener el valor del campo 'role' del token
        return role; // Devolver el rol del usuario
    }

    return null; // Si no hay token, devolver null
};

const PrivateRoute = ({ allowedRoles }) => {
    const role = useAuth();
    console.log(role);

    // Verificar si el rol del usuario está permitido
    const isAllowed = role && allowedRoles.includes(role);

    return isAllowed ? <Outlet /> : <Navigate to="/404" />;
};

export default PrivateRoute;
