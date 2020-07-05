import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css'
const NavBar = () => {
    return (
        <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
            <NavLink
                style={{ marginRight: '10px' }}
                to="/SignUp"
            >
                SignUp
      </NavLink>
            <NavLink
                style={{ marginRight: '10px' }}
                to="/patients"
            >
                Patients
      </NavLink> 
      
        <NavLink
            style={{ marginRight: '10px' }}
            to="/providers"
        >
            Providers
      </NavLink>
        </div> 

    );
}

export default NavBar;