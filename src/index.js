import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from "history";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.5.0";
import indexRoutes from "routes/index.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

const hist = createBrowserHistory();

root.render(<Router history={hist}>
  <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
</Router>);
