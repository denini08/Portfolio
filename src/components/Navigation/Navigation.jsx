import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <nav>
          <NavLink to="/">Home</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/blog">Blog</NavLink>
      </nav>
    );
  }
}

export default Navigation;
