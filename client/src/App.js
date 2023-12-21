import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./components/Dashboard/UserProfile";
import CreateCardForm from "./components/Dashboard/CreateCardForm";
import SignIn from "./components/signIn/SignIn";
import SignOut from "./components/signOut/SignOut";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/create" component={CreateCardForm} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
      </Router>
    </>
  );
}

export default App;
