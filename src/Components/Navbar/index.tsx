import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import Close from '../../assets/ci_close-big.svg';
import { useContextApp } from '../../Context';
import {
  Icon, NavbarContainer, NavLink, NavOption,
} from './styles';

interface INavbar{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ open, setOpen }:INavbar) => {
  const [initialSIze, setInitialSize] = useState(false);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContextApp();

  useEffect(() => {
    setInitialSize(open);
  }, [open]);

  useEffect(() => {
    if (close) {
      setInitialSize(!open);
      setClose(false);
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  }, [close]);

  const logoutUser = () => {
    setUser(undefined);
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <NavbarContainer style={{ width: `${initialSIze ? 30 : 0}%` }}>
      <Icon src={Close} onClick={() => setClose(true)} />
      <NavLink to="/dashboard"><NavOption >Dashboard</NavOption></NavLink>
      <NavLink to="/dashboard/extract"><NavOption >Extrato</NavOption></NavLink>
      <NavLink to="/dashboard/deposit"><NavOption >Depositar</NavOption></NavLink>
      <NavLink to="/dashboard/withdraw"><NavOption >Sacar</NavOption></NavLink>
      <NavOption onClick={logoutUser}>Sair</NavOption>
    </NavbarContainer>
  );
};
export default Navbar;
