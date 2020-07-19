import React, { Component } from 'react';
import {v1 as uuid} from 'uuid'  
import Patients from './Patients'  
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class Provider extends Component{ 
    
    constructor(props){
        super(props) 

    } 

    handleClick=()=>{  
        debugger
        this.props.fetchMyPatients(this.props.id)

    }

     render(){
        return ( 
            <div key={uuid()} className="jumbotron"> 
            
            <h1 key={uuid()}>{this.props.name}</h1>
            <h2 key={uuid()}>{this.props.email}</h2>
            <h2 key={uuid()}>{this.props.job}</h2> 
        
            <>
           </>
        </div>)

        } 
}
    


export default Provider