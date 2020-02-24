import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return <div className="nav nav-pills">
    <li className="nav-item">
      <NavLink className="nav-link" to="/" activeClassName="active" exact>Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/posts" activeClassName="active" exact>Posts</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/posts/create" activeClassName="active" exact>New Post</NavLink>
    </li>
  </div>;
};

export default Nav;
