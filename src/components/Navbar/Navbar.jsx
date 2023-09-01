import React from "react";
import NavItem from "./NavItem";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold md:text-4xl">
          Geeks <span className="text-orange">Invention</span>
        </div>
        <NavItem></NavItem>
      </div>
    </div>
  );
};

export default Navbar;
