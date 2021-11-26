import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import bootregister from "./bootregister";



class Main extends Component {
  render() {
    return (<HashRouter>
      <div>
        <h1>Covid Information Portal</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Symptoms</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          {/* <li><NavLink to="/bootregister">bootregister</NavLink></li> */}



        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/bootregister" component={bootregister} /> */}




        </div>
      </div>
    </HashRouter>
    );
  }
}

export default Main;