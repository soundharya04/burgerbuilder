import React, { Component } from "react";
import Auxil from "../../hocComp/Auxil";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/NavigationItems/sideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxil>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        ></SideDrawer>
        <main className="content">{this.props.children}</main>
      </Auxil>
    );
  }
}

export default Layout;
