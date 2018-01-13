import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    {' | '}
    <NavLink to="/child" activeClassName="active">Child Component</NavLink>
  </nav>
);

export default Header;
