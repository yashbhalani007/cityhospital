import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes(props) {
    
    let auth = useSelector(state => state.auth);
    console.log(auth);

    return (
        <div>
            {auth.user ? <Outlet /> : <Navigate to={"/auth"} replace/>}
        </div>
    );
}

export default PrivateRoutes;