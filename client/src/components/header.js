import React from "react";
import "../css/header.css";
import Logo from "../assets/alexportlogo.png";

function Header() {
  return (
    <div id="header">
      <img id="Logo" src={Logo} alt="Esthetics With Alexandra Logo" />
      <h1 id="title">
        Master Esthetician @ Company
      </h1>
    </div>
  );
}

export default Header;
