import React, {Component} from 'react';
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navbar extends Component{
    state = { clicked: false }



    render(){
        return(

            <Router>
                <h1 className = "navbar-logo">
                 <picture>
                      <img height = "33" width = "66" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20160629-33279-63115?fmt=png-alpha"></img>
                 </picture>
            </h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )

        function Home() {
            return <h2>Home</h2>;
          }
          
          function Login() {
            return <h2>Login</h2>;
          }
          
          function Logout() {
            return <h2>Logout</h2>;
          }
        } }
export default Navbar

        
        
