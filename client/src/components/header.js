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
      <div id="serviceTitle">
        <h2 className="titles">Alex LaChapelle, LME</h2>
        <p id="serviceBio">
          Licensed Master Esthetician currently working at DWH Health & Wellness
          Med Spa based in Richmond, Virginia. <br />
          Scroll down to begin your skincare journey!
        </p>
      </div>
    </div>
  );
}

export default Header;
