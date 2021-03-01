import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import Form from "./Form";
import Select from "./Select";
import TextContent from "./TextContent";
import Timer from "./Timer";

const SignUp = () => {
  return (
    <main className="outer-container">
      <header className="inner-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </header>

      <div className="main"></div>
      <div className="page-content inner-container">
        <div className="section__content-text">
          <TextContent
            heading="Work smarter. Save time."
            paragraph="Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon."
          />
          <Timer />
        </div>
        <Form />
      </div>
      <div className="side"></div>
    </main>
  );
};

export default SignUp;
