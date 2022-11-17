import React from "react";
import "../css/header.css";
import Logo from "../assets/alexportlogo.png";
import Paper from "@mui/material/Paper";

function Header() {
  return (
    <div id="header">
      <Paper elevation={3} id="bio">
        {" "}
        <img id="Logo" src={Logo} alt="Esthetics With Alexandra Logo" />
      </Paper>
    </div>
  );
}

export default Header;
