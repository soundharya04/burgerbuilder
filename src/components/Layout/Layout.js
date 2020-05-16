import React from "react";
import Auxil from "../../hocComp/Auxil";
import "./Layout.css";
const layout = (props) => (
  <Auxil>
    <div>Toolbar,sideDrawar,Backdrop</div>
    <main className="content">{props.children}</main>
  </Auxil>
);

export default layout;
