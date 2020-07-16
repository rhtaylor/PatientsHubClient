import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css' 

export default class NavBar extends Component{
    
    render(){
        return(
            <div className="bar">
                <NavLink style={{ marginRight: '10px' }} to="/SignIn"  >SignIn</NavLink>   
                <NavLink style={{ marginRight: '10px' }} to="/SignUp"  >SignUp</NavLink>

        </div>)
    }
}