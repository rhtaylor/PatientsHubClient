import React, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import { fetchMyPatients, addMyPatient } from '../actions/actions'
import { connect } from 'react-redux'
import Patients from './Patients'
import Patient from '../components/Patient' 

import AddMyPatient from '../forms/AddMyPatient'
import Provider from './Provider'
import AddMyPatientFormsContainer from '../forms/AddMyPatientFormsContainer'
import VirtualCharts from '../container/VirtualCharts'
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

export default class NavBar3 extends Component{
    
    render(){ 
        (this.props.currentURL === '/ProviderPatients') ? (
<Router > 
    
    <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
    <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/patients`}  >My Patients</NavLink>
    <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink>
    <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
        syncState={this.syncState} currentURL={this.props.currentURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
    <Route exact path={`/providers/${this.props.signed_in[0].id}/patients`} render={(routerProps) => <Patients provider_id={this.props.signed_in[0].id} {...routerProps} />} />
    <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps} />} />
</Router>) 

            : this.props.currentURL === '/providers/1/NewPatient' ? (<div>
                {this.props.updateFakeState("newRoute")}  
                 
                <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                    syncState={this.syncState} currentURL={this.props.currentURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
               </div>
            ) : null
    } 
}