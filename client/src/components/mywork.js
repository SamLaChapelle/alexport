import React from "react";
import "../css/mywork.css";
import Paper from "@mui/material/Paper";
import alexPic from "../assets/alexwebsitephoto.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

//2-3 top tier images for each service & link instagram to see more

function MyWork() {
  return (
    <div id="myWork">
      <Paper elevation={3} id="workBio">
        <img id="alexPic" src={alexPic} alt="Alexandra LaChapelle" />
        <div id="workInfo">
          <h3 id="workTitle">DWH Health & Wellness Med Spa</h3>
          <a href="https://www.google.com/maps/place/11739+W+Broad+St,+Henrico,+VA+23233/@37.6520496,-77.6209231,17z/data=!3m1!4b1!4m5!3m4!1s0x89b16a6fdeedba43:0x786390f0c9f19a33!8m2!3d37.6520496!4d-77.6209231">
            <h4 id="workAddy" style={{ textDecoration: "underline" }}>
              11739 W Broad St. Richmond VA 23233
            </h4>
          </a>
          <p id="workBooking">
            Book an appointment <br />
            <a href="tel:(804) 447-2303" style={{ color: "#ffffff" }}>
              {" "}
              (804) 447-2303{" "}
            </a>
          </p>
        </div>
        <div id="socials">
          <a href="https://www.instagram.com/estheticswithalexandra/">
            <InstagramIcon className="socialIcons" fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/alexandra-lachapelle-14794982/">
            <LinkedInIcon className="socialIcons" fontSize="large" />
          </a>
          <a href="mailto:alachapelle@dominionwomenshealth.com">
            <EmailIcon className="socialIcons" fontSize="large" />
          </a>
        </div>
      </Paper>
    </div>
  );
}

export default MyWork;
