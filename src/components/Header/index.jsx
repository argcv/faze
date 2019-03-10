import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import HeaderLinks from "./HeaderLinks";
import Button from "components/CustomButtons";

import headerStyle from "assets/jss/material-dashboard-react/components/headerStyle.jsx";

const path = require('path');

function Header({ ...props }) {
  const { classes, color, baseUrl } = props;

  // make brand will generate a brand name at the top left of the main block
  function makeBrand() {
    let name = undefined;
    props.routes.map((prop, key) => {
      // if (prop.path === props.location.pathname) {
      if (path.join(baseUrl, prop.path) === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });

    if (name == undefined) {
      console.log("Warning from src/components/Header/index.jsx: name is undefined, pathname: %o", props.location.pathname )
      props.routes.map((prop, key) => {
        console.log("props|%o: [%o] => baseUrl: %o, path: %o", key, prop.navbarName, baseUrl, prop.path);
        return null;
      });
      name = "Unknown";
    }

    return name;
  }
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title + "$$$$$"}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
