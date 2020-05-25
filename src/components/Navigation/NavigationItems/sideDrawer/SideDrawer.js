import React from "react";
import Logo from "../../../Logo/Logo";
import Auxil from "../../../../hocComp/Auxil";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let attachedclasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedclasses = ["SideDrawer", "Open"];
  }
  return (
    <Auxil>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedclasses.join(" ")}>
        <Logo height="11%" />
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Auxil>
  );
};

export default SideDrawer;
