import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";

import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import { privateRoutes } from "./components/routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {privateRoutes.map((route, index) => (
            <PrivateRoute
              key={index}
              path={route.path}
              component={route.component}
              isAuthenticated={isAuthenticated}
            />
          ))}
          <Route
            path="/signin"
            render={(props) => (
              <SignIn {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <SignUp {...props} setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
