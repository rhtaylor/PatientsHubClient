import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css'
class NavBar extends Component{ 
    constructor(props){
      super(props)
    } 

    render(){  
      debugger
      if (!(this.props.signedIn)){  return ( 
      <div className="bar"> 
      <NavLink style={{ marginRight: '10px' }} to="/SignUp"  >SignUp</NavLink> 
      <NavLink style={{ marginRight: '10px' }} to="/SignIn"  >SignIn</NavLink> 
      </div> )  
       }  else if (this.props.signedIn){ 
         return (
          <div className="bar">
            <NavLink style={{ marginRight: '10px' }} to="/About"  >About</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/charts" >Charts</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/patients" >Patients</NavLink>
            <NavLink style={{ marginRight: '10px' }} to="/providers">Providers</NavLink>
             <NavLink style={{ marginRight: '10px' }} to="/providers/:id">You</NavLink>

          </div>
        ) 
    
    }
} 
}

export default NavBar;
