import React, { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult";
const Navbar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default Navbar;
