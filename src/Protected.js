import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const userId = localStorage.getItem('userName');

  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
