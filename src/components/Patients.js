import React, { Component } from 'react'  
import { connect } from 'react-redux';
import {getPatients} from '../actions/actions' 
import Patient from './Patient' 
import { Link } from 'react-router-dom';
 class Patients extends Component{
    componentDidMount(){
        this.props.getPatients(); 

    }  
    
    makePatients = () =>{  
        debugger
        if (this.props.patients === "LOADING") {
            return (<h1>{this.props.patients}</h1>)
        } else { return this.props.patients.map((p, i) => <Patient key={i} patient={p} />) }
  }
    render(){
    return (
    <div>{this.makePatients()}</div>
            )
    }

} 
const mstp = (s) =>{
    return {patients: s.patients}
}
const mdtp = (dispatch) =>{ 
    return{getPatients: ()=> dispatch(getPatients())}
}
export default connect(mstp, mdtp)(Patients)