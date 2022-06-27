/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  BrowserRouter, Routes, Route, Navigate, Outlet,
} from 'react-router-dom';

import { useContextApp } from '../Context';
import Dashboard from '../pages/Dashboard';
import Deposit from '../pages/Deposit';
import Extract from '../pages/Extract';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import Withdraw from '../pages/Withdraw';

const AppRoutesAplication = () => {
  const { user } = useContextApp();
  // @ts-ignore
  const PrivateRoute = ({ redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token') !== null && user;
    return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />;
  };
  // @ts-ignore
  const Public = ({ redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token') !== null && user;
    return !isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute redirectTo="/"/>}>
            <Route path="/dashboard"element={<Dashboard />}/>
            <Route path="/dashboard/deposit"element={ <Deposit />}/>
            <Route path="/dashboard/withdraw"element={ <Withdraw />}/>
            <Route path="/dashboard/extract"element={ <Extract />}/>
        </Route>
        <Route element={<Public redirectTo="/dashboard"/>}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutesAplication;
