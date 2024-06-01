import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = (props) => {
	const token = localStorage.getItem('token');
    const auth = ( token != null ) ? true : null ;

    return auth ? props.Component : <Navigate to="/login" />;
}

export default AuthGuard