/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";

import helloWorldRoutes from "routes/helloWorld.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";

import { title } from "config.js";

const path = require('path');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
        this.resizeFunction = this.resizeFunction.bind(this);
    }
    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    resizeFunction() {
        if (window.innerWidth >= 960) {
            this.setState({ mobileOpen: false });
        }
    }
    componentDidMount() {
        if (navigator.platform.indexOf("Win") > -1) {
            const ps = new PerfectScrollbar(this.refs.mainPanel);
        }
        window.addEventListener("resize", this.resizeFunction);
    }
    componentDidUpdate(e) {
        if (e.history.location.pathname !== e.location.pathname) {
            this.refs.mainPanel.scrollTop = 0;
            if (this.state.mobileOpen) {
                this.setState({ mobileOpen: false });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeFunction);
    }
    render() {
        const { classes, match, ...rest } = this.props;

        let baseUrl = ""

        if (match && match.url) {
            baseUrl = match.url
        }

        let switchRoutes = (
            <Switch>
                {helloWorldRoutes.map((prop, key) => {
                    if (prop.redirect) {
                        return <Redirect from={path.join(baseUrl, prop.path)} to={path.join(baseUrl, prop.to)} key={key} />;
                    }
                    return <Route path={path.join(baseUrl, prop.path)} component={prop.component} key={key} />;
                })}
            </Switch>
        );

        return (
            <div className={classes.wrapper}>
                <Sidebar
                    routes={helloWorldRoutes}
                    logoText={ `Hello, ${title.slice(0,title.length > 4? 4: title.length)}` }
                    logo={logo}
                    image={image}
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.mobileOpen}
                    color="blue"
                    baseUrl={baseUrl}
                    {...rest}
                />
                <div className={classes.mainPanel} ref="mainPanel">
                    {/* Header */}
                    <Header
                        routes={helloWorldRoutes}
                        baseUrl={baseUrl}
                        handleDrawerToggle={this.handleDrawerToggle}
                        {...rest}
                    />
                    {/* Content */}
                    <div className={classes.content}>
                        <div className={classes.container}>{switchRoutes}</div>
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
