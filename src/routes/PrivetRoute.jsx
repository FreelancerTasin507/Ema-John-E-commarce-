import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
     const {user,loading} = useContext(AuthContext);
     const location = useLocation()
     console.log(location);

     if(loading){
        return <div>Loading....</div>
     }

     if(user){
        return children;
     }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;