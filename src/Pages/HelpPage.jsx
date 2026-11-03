import React from "react";
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import "./HelpPage.css";

const HelpPage = () => {

  return (


<main className="help-page">

  <section className="customer-care">

    <h1>Customer Care Team</h1>

    <p>

      Our customer care team is always available to assist you

      with your questions and concerns.

    </p>

  </section>

  <section className="help-intro">

    <h2>

      We are here to help, submit your questions below.

    </h2>

  </section>

  <section className="help-card">

    <h3>General Questions</h3>

    <p>

      Submit your request here.

    </p>

    <p className="help-resolution">

      Resolved within 15 business days.

    </p>

    <Button component={Link}
  to="/Contact"
  variant="contained"
>
  Submit Your Request Now
</Button>

  </section>

</main>
  );
};

export default HelpPage;