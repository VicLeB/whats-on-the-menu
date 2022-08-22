import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Login from "./views/Login";

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Navigation user={user} setUser={setUser}/>
      <Switch>
        <Route path="/login">
          <Login onLogin={setUser}/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
