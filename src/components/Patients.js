import React, { Component } from 'react'  
import { connect } from 'react-redux';
import {getPatients} from '../actions/actions'  

import Patient from './Patient' 
import { Link } from 'react-router-dom';
 class Patients extends Component{
    componentDidMount(){
        this.props.getPatients(); 
        debugger
    }  
    
    makePatients = () =>{  
        debugger
        if (this.props.patients === "LOADING") {
            return (<h1>{this.props.patients}</h1>)
        } else if (this.props.patients.length > 0 ) { return this.props.patients.map((p, i) => <Patient key={i} patient={p} />) }
  }
    render(){
    return (
    <div>{this.makePatients()}</div>
            )
    }

} 
const mstp = (s) =>{ 
    debugger
    return {patients: s.providers.patients}
}
const mdtp = (dispatch) =>{ 
    return{getPatients: ()=> dispatch(getPatients())}
}
export default connect(mstp, mdtp)(Patients)