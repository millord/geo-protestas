import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./NavBar";
import Home from "./Home";
import ProtestasMap from "./ProtestasMap";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/map" component={ProtestasMap} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
