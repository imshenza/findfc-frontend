import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, text }) => {
  return (
    <Link to={to} className="button">
      {text}
    </Link>
  );
};

export default ButtonLink;
