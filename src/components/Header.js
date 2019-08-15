import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import ImageDisplay from "./Image";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        <h2 style={{ color: "#ffffff" }}>Streamy</h2>
      </Link>

      <div className="right menu" />
      <div className="item small">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
