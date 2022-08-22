import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Login from "./views/Login";

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
