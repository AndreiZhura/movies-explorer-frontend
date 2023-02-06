// ProtectedRoute.js

import React from 'react';
import { Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRouteElement = ({ element: Component, ...props  }) => {
  return (
    props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin"/>
)}

export default ProtectedRouteElement;