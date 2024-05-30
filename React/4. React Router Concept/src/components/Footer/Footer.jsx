import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <p>
        This is Footer 
        <Link to="https://en.wikipedia.org/wiki/Terms_of_service">
          Terms Of Service
        </Link>
      </p>
    </div>
  );
};

export default Footer;
