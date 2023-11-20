import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentToken,
  selectCurrentUser,
  authActions,
} from '../pages/store/auth_slice';
import router from 'next/router';

export const Layout = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
    router.replace('/login');
  };
  return (
    <Container>
      <Header user={user} handleLogOut={handleLogout} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
