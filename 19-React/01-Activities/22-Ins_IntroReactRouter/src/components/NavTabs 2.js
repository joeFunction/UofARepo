import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/blog" className="nav-link">
          Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact/learn" className= "nav-link">
          Learn
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
