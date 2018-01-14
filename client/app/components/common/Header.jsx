import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <nav>
    <NavLink to="/" activeClassName="active">Home</NavLink>
    {' | '}
    <NavLink to="/child" activeClassName="active">Child Component</NavLink>
    <span>
      {' | '}User ID: {props.userId}{' | '}Users Online: {props.numUsers}
    </span>
  </nav>
);

Header.propTypes = {
  userId: PropTypes.string,
  numUsers: PropTypes.number,
};

Header.defaultProps = {
  userId: '',
  numUsers: 0,
};

export default Header;
