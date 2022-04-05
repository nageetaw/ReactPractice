import React from "react";
import { NavLink } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink to={"/products"}>
          <li>Product</li>
        </NavLink>
      </ul>
    );
  }
}

export default Navbar;
