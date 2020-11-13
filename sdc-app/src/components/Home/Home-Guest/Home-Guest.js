import React, {Component} from 'react';
// import Navbar from "../../Navbar/Navbar"
import Navbar from "../../Navbar/Navbar";
import ServiceLog from "../../Equipment/ServiceLog";
import Dashboard from '../../Equipment/Dashboard';

  class Guest extends Component{
      render(){
          return(
            <React.Fragment>
              <div>
                Home-Guest
              </div> 
              <ServiceLog isManager/>    
            </React.Fragment>
          )
      }
  }

  export default Guest