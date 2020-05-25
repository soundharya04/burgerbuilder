import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../../Navigation/NavigationItems/sideDrawer/DrawwerToggle/DrawerToggle";

import "./Toolbar.css";

const Toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default Toolbar;
