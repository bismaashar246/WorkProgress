import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token'); // Get token from localStorage

    return (
        token === 'true' ? <Outlet/> : <Navigate to="/login"/>
    );
}

export default ProtectedRoute;
