import React from "react";
import { useState } from "react";
import "../css/services.css";
import Paper from "@mui/material/Paper";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const papers = entry.target.querySelector(".papers");

      if (entry.isIntersecting) {
        papers.classList.add("paperAnimation");
        papers.classList.remove("reversePaperAnimation");
        return;
      } else if (!entry.isIntersecting) {
        papers.classList.add("reversePaperAnimation");
        papers.classList.remove("paperAnimation");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const servicePapers = document.querySelectorAll(".servicePapers");
servicePapers.forEach((servicePaper) => {
  observer.observe(servicePaper);
});

function Services() {
  return (
    <div id="services">
      <div id="serviceTitle">
        <h2 className="titles">Alexandra LaChapelle</h2>
        <h4 className="titles" id="subTitle">
          Licensed Master Esthetician
        </h4>
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#f9d5d9" }}
        ></Paper>{" "}
      </div>
      <div className="servicePapers">
        {" "}
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#f9d5d9" }}
        ></Paper>{" "}
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#f9d5d9" }}
        ></Paper>
      </div>
    </div>
  );
}

export default Services;
