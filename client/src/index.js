import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './views/Home/Home';
import NotFound from "./views/NotFound/NotFound";
import "./assets/scss/material-kit-react.scss?v=1.9.0";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
