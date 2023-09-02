import React, { useState } from "react";
import NavItem from "./NavItem";
import NavbarItem from "./NavbarItem";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center static">
        <div className="text-3xl font-bold md:text-4xl fixed left-2 top-2">
          Geeks <span className="text-orange">Invention</span>
        </div>
        <div className="fixed right-0 top-2 p-2">
          <NavItem></NavItem>
        </div>
        {/* <NavbarItem></NavbarItem> */}
      </div>
    </div>
  );
};

export default Navbar;
