import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Search from './Search';
import { useToggle } from '../../hooks/state';

const headers = [
  { title: 'Home', url: '/' },
  { title: 'Telco', url: '/telco' },
  { title: 'Billing', url: '/billing' },
  { title: 'Flight', url: '/flight' },
  { title: 'Tickets', url: '/tickets' },
]

const logoSrc = 'https://toppng.com/uploads/preview/luffy-anime-one-piece-luffy-115628753714bjr6ypxar.png'
const avatarSrc = 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/87072308_2503062486619979_2254627920800645120_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=eELnl4TxxmkAX9LE8eG&_nc_ht=scontent.fsgn5-6.fna&oh=8bd10383ba83912fc7347011583d24c5&oe=5FC33727';

const Header = ({ active }) => {
  const [isOpen, handleToggle] = useToggle(false)

  return (
    <Navbar color="light" light expand="lg" style={{ width: '100%' }} >
      <img style={{ width: 40, height: 40 }} src={logoSrc} />
      <NavbarBrand href="/" style={{ fontWeight: 700, color: 'steelblue' }}>
      </NavbarBrand>
      <NavbarToggler onClick={handleToggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          { headers.map(({ title, url }) => (
            <NavItem active={title.toLowerCase() === active} key={title}>
              <NavLink href={url}>{title}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
      <img src={avatarSrc} style={{ width: 40, height: 40, borderRadius: '50%' }} style={{ cursor: 'pointer' }} />
    </Navbar>
  );
}

export default Header;