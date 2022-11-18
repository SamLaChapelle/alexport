import React from "react";
import { useState } from "react";
import "../css/services.css";
import Paper from "@mui/material/Paper";

//Each paper with have a service & description / products used

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
    root: document.querySelector(".services"),
    rootMargin: "0%",
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
        <h2 className="titles">Alex LaChapelle, LME</h2>
        <p id="serviceBio">
          Licensed Master Esthetician currently working at DWH Health & Wellness
          Med Spa based in Richmond, Virginia. <br />
          Scroll down to begin your skincare journey!
        </p>
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#eee3e1" }}
        >
          <h3 className="serviceSubTitles">Facials</h3>
          <p className="desc">
            A customized in depth treatment based off of your skin care needs.
            Including a double cleanse, exfoliation and extractions while using
            medical grade skin care products.
            <br />
            <br />
            Skin Care Never Felt So Good!
          </p>
        </Paper>{" "}
      </div>
      <div className="servicePapers">
        {" "}
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#eee3e1" }}
        >
          <h3 className="serviceSubTitles">Intense Pulsed Light</h3>
          <p className="desc">
            Intense Pulsed Light can get rid of unwanted pigment will boosting
            collagen in the skin. IPL can also remove unwanted hair, leaving a
            smoother skin tone, healthier complexion, and less visible sun
            damage.
          </p>
        </Paper>{" "}
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#eee3e1" }}
        >
          <h3 className="serviceSubTitles">Laser Treatment</h3>
          <p className="desc">
            {" "}
            Our non-ablative fractional laser can penetrate the deeper layers of
            your skin and help rid of fine lines and wrinkles with little to no
            down time.
          </p>
        </Paper>
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#eee3e1" }}
        >
          <h3 className="serviceSubTitles">Microneedling with PRP</h3>
          <p className="desc">
            A treatment stimulating collagen production the deeper layers of the
            skin using stainless steel needles accompanied with platelet rich
            plasma which enhances your results. Add on radio frequency if your
            goal is to lift and tighten.
          </p>
        </Paper>
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#eee3e1" }}
        >
          <h3 className="serviceSubTitles">Waxing</h3>
          <p className="desc"></p>
        </Paper>
      </div>
      <div className="servicePapers">
        <Paper
          className="papers"
          elevation={3}
          style={{ backgroundColor: "#eee3e1" }}
        >
          <h3 className="serviceSubTitles">Brows & Lashes</h3>
          <p className="desc"></p>
        </Paper>
      </div>
    </div>
  );
}

export default Services;
