import React from "react";
import { Link } from "react-router-dom";
import charts from "../assets/home/charts.svg";
import Pricing from "./Pricing";

const Section = () => {
  return (
    <section className="section">
      <div className="outer-container">
        <div className="section__content row inner-container">
          <div className="section__content-text">
            <h1 className="section__content-heading">
              A simple solution to complex tasks is coming soon
            </h1>
            <p className="section__content-p">
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
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
