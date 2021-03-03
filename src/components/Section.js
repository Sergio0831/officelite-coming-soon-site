import React from "react";
import { Link } from "react-router-dom";
import charts from "../assets/home/charts.svg";
import Pricing from "./Pricing";
import TextContent from "./TextContent";

const Section = () => {
  return (
    <section className="section">
      <div className="outer-container">
        <div className="section__content inner-container">
          <div className="section__content-text">
            <TextContent
              heading="A simple solution to complex tasks is coming soon"
              paragraph="Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity."
            />
            <Link to="/signup" className="btn-1">
              Get Started
            </Link>
          </div>
          <div className="section__content-image">
            <img src={charts} alt="Charts" />
          </div>
        </div>
      </div>
      <Pricing />
    </section>
  );
};

export default Section;
