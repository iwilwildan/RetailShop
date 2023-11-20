import Link from 'next/link';
import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { DiWebplatform } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  Span,
  NavLink,
  Icons,
  UserName,
} from './HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';
import router from 'next/router';

const Header = ({ user, handleLogOut }) => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#FF6969',
            marginBottom: '20px',
          }}
        >
          <DiWebplatform size="3rem" /> <Span>ildan Retail </Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Products</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/admin">
          <NavLink>Admin</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      {user ? (
        <>
          <UserName>{user}</UserName>
          <Icons onClick={handleLogOut}>
            <RiLogoutBoxRLine size="3rem" />
          </Icons>
        </>
      ) : (
        <Button alt={'true'} onClick={() => router.push('/login')}>
          Login
        </Button>
      )}
    </Div3>
  </Container>
);

export default Header;
