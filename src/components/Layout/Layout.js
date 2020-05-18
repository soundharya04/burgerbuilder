import React from "react";
import Auxil from "../../hocComp/Auxil";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
const layout = (props) => (
  <Auxil>
    <Toolbar />
    <main className="content">{props.children}</main>
  </Auxil>
);

export default layout;
