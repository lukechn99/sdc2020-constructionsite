import React, {Component} from 'react';
import Navbar from "./Navbar/Navbar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  class Home extends Component{
      render(){
          return(
            <Router>
            <div name = "Navigation-Bar">
                <Navbar /> 
            </div>
            
            <div name = "Products-Table">
                
                <table>
                  <tr>
                      <td>
                        <div>

                          <picture>
                            
                          </picture>

                        </div>
                      </td>
                  </tr>
                  <tr>

                  </tr>
                </table>

            </div>
            
            </Router>

          )
      }
  }

  export default Home