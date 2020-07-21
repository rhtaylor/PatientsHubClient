import React, { Component } from 'react'  
import {v1 as uuid} from 'uuid' 
import {fetchMyPatients} from '../actions/actions'
import {connect} from 'react-redux'
import Patients from '../components/Patients' 
import Patient from '../components/Patient'  
import AddMyPatient from '../forms/AddMyPatient'
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
        if (this.props.providers === "UPLOADING"){ 
        return <h4>{this.props.providers}</h4>
        } else if (this.props.providers.length >= 1 ){
           return this.props.providers.map(pro => <div><Provider {...pro} /></div>)
        }

        if (this.props.signed_in && this.props.signed_in.length <= 1 && (this.props.signed_in[0] === 'LOADING')){ 
         debugger
            return <h4>{this.props.signed_in}</h4> }  
            
        else if (this.props.myPatients.length > 0 && this.props.myPatients[0] === 'LOADING'){ 
            return <h1>{this.props.myPatients[0]}</h1>} 
        
          else {
            return (<div> 
                <br/>
                <Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}  
                    fetchMyPatients={this.props.fetchMyPatients}/> 
                <Router > 
                    <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add this Patient's Chart</NavLink>
                <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/patients`}  >My Patients</NavLink>
                    <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatient {...routerProps} />} />                
 
                    <Route exact path={`/providers/${this.props.signed_in[0].id}/patients`} render={(routerProps) => <Patients  {...routerProps}/>} /> 
                                   
                </Router>
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
    debugger
    return{myPatients: state.providers.patients, 
           signed_in: state.providers.signed_in, 
           providers: state.providers.providers
    }
} 

const mdtp =(dispatch)=>{
    return { fetchMyPatients: (providerId) => dispatch(fetchMyPatients(providerId)) 
    
    }
} 



export default connect(mstp, mdtp)(ProviderPatients)