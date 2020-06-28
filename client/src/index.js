import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Livros from "./pages/Livros/Livros";
import Autores from "./pages/Autores/Autores";
import Sobre from "./pages/Sobre/Sobre";
import NotFound from "./pages/NotFound/NotFound";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";
import Components from "./views/Components/Components";

import "./assets/scss/material-kit-react.scss?v=1.9.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
