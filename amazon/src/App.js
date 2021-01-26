import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from "./components/Checkout";
import { auth } from "./components/firebase";
import Header from "./components/Header"
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{basket} , dispatch ] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //user logged in 
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else {
        //user logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return () => {
      //any clean up operation will go here
      unsubscribe()
    }
  },[])



  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
