import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import Login from "./views/Login";
import RestaurantDetails from "./views/RestaurantDetails";
import LeaveAReview from "./views/LeaveAReview";

function App() {
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] =useState([])
  const [errors, setErrors] =useState(false)

  useEffect(()=>{
    fetch("/restaurants")
    .then(resp => {
      if(resp.ok){
        resp.json().then((data)=>setRestaurants(data))
      }else{
        resp.json().then(error => setErrors(error.errors))
      }
    })
  },[])

  if (errors) return <h1>{errors}</h1>

  return (
    <div className="App">
      <Navigation user={user} setUser={setUser}/>
      <Switch>
        <Route path="/login">
          <Login onLogin={setUser}/>
        </Route>
        <Route path="/restaurant/:id">
          <RestaurantDetails user={user}/>
        </Route>
        <Route path="/review">
          <LeaveAReview/>
        </Route >
        <Route exact path="/">
          <Home restaurants={restaurants}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
