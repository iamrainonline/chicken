import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div
      className="bg-slate-800 h-[70px] full-flex w-full transition-all duration-300 z-10"
      style={{
        position: "sticky",
        top: "0",
      }}
    >
      <div className="wrapper">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
