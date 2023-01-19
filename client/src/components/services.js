import React from "react";
import "../css/services.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Services() {
  return (
    <div id="services">
    <Accordion className="serviceAccordions" style={{backgroundColor: "#ffffff10"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" style={{fontFamily: "'Libre Baskerville', serif", color: "#feb5a9"}}>Facials</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios" style={{fontFamily: "Abel, sans-serif"}}>
          A customized in depth treatment based off of your skin care needs.
            Including a double cleanse, exfoliation and extractions while using
            medical grade skin care products.
            <br />
            <br />
            Skin Care Never Felt So Good!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#ffffff10"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" style={{fontFamily: "'Libre Baskerville', serif", color: "#feb5a9"}}>Intense Pulsed Light</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios" style={{fontFamily: "Abel, sans-serif"}}>
          Intense Pulsed Light can get rid of unwanted pigment will boosting
            collagen in the skin. IPL can also remove unwanted hair, leaving a
            smoother skin tone, healthier complexion, and less visible sun
            damage.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#ffffff10"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" style={{fontFamily: "'Libre Baskerville', serif", color: "#feb5a9"}}>Laser Treatment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios" style={{fontFamily: "Abel, sans-serif"}}>
          Our non-ablative fractional laser can penetrate the deeper layers of
            your skin and help rid of fine lines and wrinkles with little to no
            down time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#ffffff10"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" style={{fontFamily: "'Libre Baskerville', serif", color: "#feb5a9"}}>Microneedling with PRP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios" style={{fontFamily: "Abel, sans-serif"}}>
          A treatment stimulating collagen production the deeper layers of the
            skin using stainless steel needles accompanied with platelet rich
            plasma which enhances your results. Add on radio frequency if your
            goal is to lift and tighten.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#ffffff10"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" style={{fontFamily: "'Libre Baskerville', serif", color: "#feb5a9"}}>Waxing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios" style={{fontFamily: "Abel, sans-serif"}}>
            Full body waxing using hypoallergenic hard and soft wax.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="serviceAccordions" style={{backgroundColor: "#ffffff10"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" style={{fontFamily: "'Libre Baskerville', serif", color: "#feb5a9"}}>Brows & Lashes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="serviceBios" style={{fontFamily: "Abel, sans-serif"}}>
            Brows | Waxing | Tinting & Lamination
            <br/>
            <br/>
            Lashes - Lash lifts & tints | Lash condition & tint
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Services;
