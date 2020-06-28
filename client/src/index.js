import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './views/Home/Home';
import NotFound from "./pages/NotFound/NotFound";
import LandingPage from "./views/LandingPage/LandingPage";
import Components from "./views/Components/Components";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/components" component={Components} />
      <Route path="/" component={Home} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
