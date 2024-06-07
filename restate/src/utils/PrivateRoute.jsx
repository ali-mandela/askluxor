import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getUser } from './ApiRequest';

export default function PrivateRoute() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && userInfo == null) {
      dispatch(getUser());
    }
  }, [dispatch, userInfo]);

  // Render loading state or fallback UI if userInfo is still being fetched
  if (!userInfo) {
    const token = localStorage.getItem('token');
    if (token) {
      return <div>Loading...</div>;
    } else {
      return <Navigate to='/agent/login' />;
    }
  }

  return userInfo !== null ? <Outlet /> : <Navigate to='/agent/login' />;
}
