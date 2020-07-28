import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css' 
import {connect} from 'react-redux'
import AddMyPatientFormsContainer from '../forms/AddMyPatientFormsContainer'  
import PatientsMaker from './PatientsMaker'
import VirtualCharts from '../container/VirtualCharts' 

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ProviderPatients from './ProviderPatients';
class NavBar extends Component{ 



   
    render(){ 
        debugger
        return( 
                <div className="bar"> 
                {  (this.props.location.pathname === '/') ?   
                
                     <div> <NavLink style={{ marginRight: '10px' }} to="/SignIn"  >SignIn</NavLink>
                <NavLink style={{ marginRight: '10px' }} to="/SignUp"  >SignUp</NavLink></div> 
                    : this.props.location.pathname === '/SignIn' ? 
                        <NavLink style={{ marginRight: '10px' }} to="/SignIn"  >SignIn</NavLink>
                    : this.props.location.pathname === '/ProviderPatients' ? 
                <div> 
                                
                <Route exact path='/ProviderPatients' render={(routerProps) => <ProviderPatients {...routerProps} />} />

                <NavLink style={{ marginRight: '10px' }} to="/SignOut"  >SignOut</NavLink>
                
                <NavLink style={{ marginRight: '10px' }} to='/Patients'>My Patients</NavLink>
                                <Route exact path='/Patients' render={(routerProps) => <PatientsMaker {...routerProps} />} /> 
                
                <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
                            <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                                    syncState={this.syncState} updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} /> 

                <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink>
                            <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps} />} />
                
                </div>
                : this.props.location.pathname === `/providers/${this.props.signed_in[0].id}/NewPatient` ?  
                      <div> 
                            <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
                            <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                                syncState={this.syncState} updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
                    </div> 

                    :   this.props.location.pathname === '/Patients' ?
                <div> 
                <NavLink style={{marginRight: '10px'}} to='/Patients'>My Patients</NavLink>
                <Route exact path='/Patients' render={(routerProps) => <PatientsMaker {...routerProps} />} /> 
                                        <NavLink style={{ marginRight: '10px' }} to='/ProviderPatients'>Home</NavLink>
                                        <Route exact path='/ProviderPatients' render={(routerProps) => <ProviderPatients {...routerProps} />} />
                
                </div> 
                                : this.props.location.pathname === `providers/${this.props.signed_in[0].id}/NewPatient` ?
                
                <div>
                <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
                            <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                                syncState={this.syncState} updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
                                            <NavLink style={{ marginRight: '10px' }} to='/ProviderPatients'>Home</NavLink>
                                            <Route exact path='/ProviderPatients' render={(routerProps) => <ProviderPatients {...routerProps} />} />
               
                </div> 
                                    : this.props.location.pathname === `/providers/${this.props.signed_in[0].id}/MyCharts` ? 
                <div>
                <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink>
                <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps} />} />
                                                <NavLink style={{ marginRight: '10px' }} to='/ProviderPatients'>Home</NavLink>
                                                <Route exact path='/ProviderPatients' render={(routerProps) => <ProviderPatients {...routerProps} />} />
                </div>
                : null
             }
                </div> 
                
        )
    }
}  

const mstp =(state)=>{
    return{signed_in: state.providers.signed_in}
}

export default connect(mstp)(NavBar)