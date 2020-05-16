import React from "react";

import "./Layout.css";
const layout = (props) => (
  <div>
    <div>Toolbar,sideDrawar,Backdrop</div>
    <main className="content">{props.children}</main>
  </div>
);

export default layout;
