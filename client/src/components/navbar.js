import React from "react";
import "../css/navbar.css";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CollectionsIcon from '@mui/icons-material/Collections';
import PersonIcon from '@mui/icons-material/Person';

function NavBar() {
  return <div id="navbar"><AutoFixHighIcon />
    <h4 className="navTitles">SERVICES</h4>
    <h4 className="navTitles">MY WORK</h4>
    <h4 className="navTitles">ABOUT ME</h4>
  </div>;
}

export default NavBar;
