import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./router/home/home";
import Login from './router/login/Login';
import Not from "./router/404/404";
import Register from "./router/register/Register";
import './app.scss';
import Product from './router/product/product';
import Game from './router/game/game';
import Mbbank from './router/app-router/mbbank/mbbank';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/js-app/"><Home /></Route>
          <Route exact path="/js-app/game"><Game /></Route>
          <Route exact path="/js-app/mbbank"><Mbbank /></Route>
          <Route path="/js-app/product"><Product /></Route>
          <Route path="/js-app/login"><Login /></Route>
          <Route path="/js-app/register"><Register /></Route>
          <Route path="*"><Not /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
