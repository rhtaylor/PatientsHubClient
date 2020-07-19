import React, { Component } from 'react'  
import {v1 as uuid} from 'uuid' 
import {fetchMyPatients} from '../actions/actions'
import {connect} from 'react-redux'
import Patients from '../components/Patients' 
import Patient from '../components/Patient' 
import Provider from './Provider'
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class ProviderPatients extends Component{
    
    proxyFetch({id}){  
    if (this.props.myPatients[0] === 'LOADING'){ 
         setTimeout(function(){ console.log('tick tick')}, 3000) } 
    else { this.props.fetchMyPatients(id) }
        
    }

    dataDisplay =()=>{ 
        debugger
        if (this.props.signed_in && this.props.signed_in.length <= 1 && (this.props.signed_in[0] === 'LOADING')){ 
         debugger
            return <h4>{this.props.signed_in}</h4> }  
            
        else    { debugger  
            return (<div> 
                <br/>
                <Provider name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}  /> 
                <NavLink style={{ marginRight: '10px' }} to="/patients"  >My Patients</NavLink>
                
                <Route exact path='/patients' render={() => <Patients />} /> 
            </div>) 
        }                   
    }
        
    
    
    
    render(){ 
        debugger
        return(<div> 
            {this.dataDisplay()}
        </div>)
    }
} 
 
const mstp =(state)=>{
    return{myPatients: state.providers.patients, 
           signed_in: state.providers.signed_in
    }
} 

const mdtp =(dispatch)=>{
    return { fetchMyPatients: (providerId) => dispatch(fetchMyPatients(providerId)) 
    
    }
} 



export default connect(mstp, mdtp)(ProviderPatients)