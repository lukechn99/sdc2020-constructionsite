import React from 'react';
// import Navbar from "./Navbar/Navbar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomeUser from "../Home/Home-User/Home-User"
  
  class Login extends React.Component{

    render(){
        return(
            <Router>
            <div className = "Login-Page">
            <body>
              <h1>
                <strong>
                  Login Here
                </strong>
              </h1>
              <div>
                <input placeholder="UserID"></input>
              <p/>
               <input placeholder="Site Number"></input>
              <p/> 
                <input placeholder="Password"></input>
              <p/>
              </div>
              <Link to="/Home-User">
                <button className="btnLogin" onClick="HomeUser()">Login</button>
              </Link>
            </body>


            <Switch>
          
          <Route path="/Home-User">
            <HomeUser />
          </Route>
          
        </Switch>
          </div>
          </Router>
          )
      }
  }

  export default Login