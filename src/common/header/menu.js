import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: inline-block;
  margin: 0 20px;
  padding: 0;
  
  &:first-child {
    margin: 0 20px 0 0;
  }
  
  &:last-child {
    margin: 0 0 0 20px;
  }
`;

const MenuLink = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: #222;
`;

const Menu = () => (
  <MenuWrapper>
    <MenuItem>
      <MenuLink exact to="/">Todo</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink exact to="/">About</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink exact to="/">Products</MenuLink>
    </MenuItem>
    <MenuItem>
      <MenuLink exact to="/">Services</MenuLink>
    </MenuItem>
  </MenuWrapper>
);

export default Menu;
