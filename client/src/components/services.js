import React from "react";
import { useState, useEffect } from "react";
import "../css/services.css";
import Paper from "@mui/material/Paper";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Services() {
  return (
    <div id="services">
    <Accordion className="serviceAccordions" style={{backgroundColor: "#feb5a9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" className="serviceTitles">Facials</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios">
          A customized in depth treatment based off of your skin care needs.
            Including a double cleanse, exfoliation and extractions while using
            medical grade skin care products.
            <br />
            <br />
            Skin Care Never Felt So Good!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#feb5a9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className="serviceTitles">Intense Pulsed Light</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios">
          Intense Pulsed Light can get rid of unwanted pigment will boosting
            collagen in the skin. IPL can also remove unwanted hair, leaving a
            smoother skin tone, healthier complexion, and less visible sun
            damage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#feb5a9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className="serviceTitles">Laser Treatment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios">
          Our non-ablative fractional laser can penetrate the deeper layers of
            your skin and help rid of fine lines and wrinkles with little to no
            down time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#feb5a9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className="serviceTitles">Microneedling with PRP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios">
          A treatment stimulating collagen production the deeper layers of the
            skin using stainless steel needles accompanied with platelet rich
            plasma which enhances your results. Add on radio frequency if your
            goal is to lift and tighten.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#feb5a9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className="serviceTitles">Waxing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#feb5a9"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5" className="serviceTitles">Brows & Lashes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Services;
