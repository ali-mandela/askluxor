/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUser } from './ApiRequest';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem('token') && !user.userInfo) {
      getUser(dispatch);
    }
  }, [dispatch, user.userInfo]);

  if (localStorage.getItem('token')) {
    if (user.userInfo) {
      return children;
    } else {
      return <div>Loading...</div>;
    }
  } else {
    return <Navigate to="/agent/login" />;
  }
};

const RoleBasedRedirect = ({ children }) => {
  const user = useSelector((state) => state.user?.userInfo);

  if (localStorage.getItem('token')) {
    if (user?.role === 'USER') {
      return <Navigate to="/agent/post-a-property" />;
    } else if (user?.role === 'ADMIN') {
      return <Navigate to="/agent/admin/dashboard" />;
    }
  }

  return children;
};

export default ProtectedRoute;
export { RoleBasedRedirect };
