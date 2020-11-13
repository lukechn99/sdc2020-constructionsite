import React, {Component} from 'react';

import "./Navbar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
   
  import Logout from "../Home/Home-Guest/Home-Guest"
  import Login from "../Login/Login"
  import HomeUser from "../Home/Home-User/Home-User"
  import Home from "../Home/Home-Guest/Home-Guest"

class Navbar extends Component{
    state = { clicked: false }



    render(){
        return(

            <Router>
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
            <li>
                 <picture>
                      <img alt = " " height = "33" width = "66" src="https://s7d2.scene7.com/is/image/Caterpillar/CM20160629-33279-63115?fmt=png-alpha"></img>
                 </picture>
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
          <Route path="/Home-User">
            <HomeUser />
          </Route>
          
        </Switch>
      </div>
    </Router>
    )

          
        } }
export default Navbar
