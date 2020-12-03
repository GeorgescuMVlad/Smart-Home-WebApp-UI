import React from 'react';
import HomePage from "./components/home-page/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageMenu from './components/home-page/home-page-menu/HomePageMenu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/home">
          <HomePageMenu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
