import React, {Component} from 'react';
// import Navbar from "../../Navbar/Navbar"
import Navbar from "../../Navbar/Navbar";
import ServiceLog from "../../Equipment/ServiceLog";
import Dashboard from '../../Equipment/Dashboard';

  class User extends Component{
      render(){
          return(
            <React.Fragment>
              <div>
                Home-User
              </div>
              <ServiceLog isManager/>    
            </React.Fragment>
          )
      }
  }

  export default User