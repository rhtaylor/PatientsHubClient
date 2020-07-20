import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css' 

export default class NavBar extends Component{ 



    // this.props.location.pathname === '/SignIn'

    render(){ 
        debugger
        return( 
                <div className="bar"> 
                {  (this.props.location.pathname === '/') ?   
                
                     <div> <NavLink style={{ marginRight: '10px' }} to="/SignIn"  >SignIn</NavLink>
                <NavLink style={{ marginRight: '10px' }} to="/SignUp"  >SignUp</NavLink></div> 
                    : this.props.location.pathname === '/ProviderPatients' ?
                <NavLink style={{ marginRight: '10px' }} to="/SignOut"  >SignOut</NavLink> 
                : null
             }
                </div> 
                
        )
    }
}