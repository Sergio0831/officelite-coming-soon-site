import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="outer-container">
        <div className="inner-container">
          <div className="footer__content row">
            <Timer />
            <div className="footer__button">
              <Link className="btn-1" to="/signup">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
