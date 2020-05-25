import React from "react";
import logo from "../../assets/images/Logo.png";

import "./Logo.css";
const Logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={logo} alt="LOGO" />
  </div>
);

export default Logo;
