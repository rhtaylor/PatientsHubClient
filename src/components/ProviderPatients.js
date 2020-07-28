import React, { Component, useCallback } from 'react'  
import {v1 as uuid} from 'uuid' 
import {fetchMyPatients, addMyPatient} from '../actions/actions'
import {connect} from 'react-redux'
import Patients from '../components/Patients' 
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


class ProviderPatients extends Component{ 
   
        state = { 
        currentURL: ''
    } 
     
     
    updateStateBasedonURL=(path)=>{
        let MOCKSTATE = path  
      return MOCKSTATE      
    } 

    componentDidUpdate(){
        debugger  
     this.state.currentURL !== 'ProviderPath' ? console.log("NOOOO") : console.log("Weird")
    
    }  

   myCustomRoutGate(){
      
   }
    componentDidMount(){ 
        this.updateStateBasedonURL(this.props.location.pathname)
        this.dataDisplay()
        if (this.props.myPatients.length === 0){    
            debugger  
            if(this.props.signed_in[0] !== 'LOADING'){ 
                debugger
                this.props.fetchMyPatients(this.props.signed_in[0].id)
                
        } }
    }

    proxyFetch(id){   
        debugger 
    if (this.props.myPatients[0] === 'LOADING'){ 
         setTimeout(function(){ console.log('tick tick')}, 3000) } 
    else { this.props.fetchMyPatients(id) }
        
    }

    dataDisplay =()=>{ 
        debugger  
        if (this.updateStateBasedonURL(this.props.location.pathname) === '/providers/1/NewPatient'){
            return(<div> 
                <Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}
                    fetchMyPatients={this.props.fetchMyPatients} /> 
                <Router > 
                <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                    syncState={this.syncState} updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
                </Router>
            </div>)
        }      
        else if (this.updateStateBasedonURL(this.props.location.pathname) === '/ProviderPatients'){  
             return (<div>
                <br />
                <Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}
                    fetchMyPatients={this.props.fetchMyPatients} />
                <Router >
                
             
                <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink>
                
                
                <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps} />} />
                </Router>
            </div>)
        
          }  
          else if (this.props.providers === "UPLOADING") {
            return <h4>{this.props.providers}</h4>
        }
        else if (this.props.providers.length >= 1 ){
           return this.props.providers.map(pro => <div><Provider {...pro} /></div>)
        }

        if (this.props.signed_in && this.props.signed_in.length <= 1 && (this.props.signed_in[0] === 'LOADING')){ 
         debugger
            return <h4>{this.props.signed_in}</h4> }  
            
        else if (this.props.myPatients.length > 0 && this.props.myPatients[0] === 'LOADING'){ 
            return <h1>{this.props.myPatients[0]}</h1>} 
        else if (this.updateStateBasedonURL(this.props.location.pathname) === '/providers/1/NewPatient'){ 
                return(<div ><Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}
                fetchMyPatients={this.props.fetchMyPatients} />
                <Router >
                <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
                </Router>
                </div>)
        }
        
        else if (this.state.currentURL === `/providers/${this.props.signed_in[0].id}/MyCharts`) { 
          return ( <div ><Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}
                fetchMyPatients={this.props.fetchMyPatients} /> 
                    <Router >
                  <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps}
                  updateStateBasedonURL={this.updateStateBasedonURL} />} />
                    </Router >
                </div>
           ) } else if((this.props.location.pathname === '/ProviderPatients')){
            return (<div>
                <br />
                <Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}
                    fetchMyPatients={this.props.fetchMyPatients} />
                <Router >
                    {(this.props.location.pathname === `/providers/${this.props.signed_in[0].id}/NewPatient`) ? null :
                        (<div><NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
                           
                            <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink>
                        </div>)}

                    <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                       syncState={this.syncState} updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />

                    
                    <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps}  
                        updateStateBasedonURL={this.updateStateBasedonURL} />} />

                </Router>
            </div>)}  
            else if (this.props.location.pathname === '/ProviderPatients') {
                return (<div>
                    <br />
                    <Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}
                        fetchMyPatients={this.props.fetchMyPatients} />
                    <Router >
                        <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
                        <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/patients`}  >My Patients</NavLink>
                        <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink>
                        <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer
                            updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />
                        <Route exact path={`/providers/${this.props.signed_in[0].id}/patients`} render={(routerProps) => <Patients updateStateBasedonURL={this.updateStateBasedonURL} provider_id={this.props.signed_in[0].id} {...routerProps} />} />
                        <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps} />} />
                    </Router>
                </div>)

            
        } else {
            
            return (<div> 
                <br/> 
                <h1>or is it down here?</h1>
                <Provider id={this.props.signed_in[0].id} name={this.props.signed_in[0].name} job={this.props.signed_in[0].job} email={this.props.signed_in[0].email}  
                    fetchMyPatients={this.props.fetchMyPatients}/> 
                                               
                    {  (this.props.location.pathname === `/providers/${this.props.signed_in[0].id}/NewPatient`) ? null : 
                         (<div><NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/NewPatient`} >Add a new patient's chart</NavLink>
                    <NavLink style={{ marginRight: '10px' }} to={`providers/${this.props.signed_in[0].id}/patients`}  >My Patients</NavLink>
                    <NavLink style={{ marginRight: '10px'}} to={`providers/${this.props.signed_in[0].id}/MyCharts`} >My Charts</NavLink> 
                    </div>) } 
                    
                    <Route exact path={`/providers/${this.props.signed_in[0].id}/NewPatient`} render={(routerProps) => <AddMyPatientFormsContainer  
                        provider_id={this.props.signed_in[0].id} addMyPatient={this.props.addMyPatient} {...routerProps} />} />                
 
                    <Route exact path={`/providers/${this.props.signed_in[0].id}/patients`} render={(routerProps) => <Patients provider_id={this.props.signed_in[0].id} {...routerProps}/>} /> 
                    <Route exact path={`/providers/${this.props.signed_in[0].id}/MyCharts`} render={(routerProps) => <VirtualCharts provider_id={this.props.signed_in[0].id} {...routerProps} />} />

               
            </div>) 
         }                   
         }
        back=()=>{ 
            debugger
            this.props.history.goBack()
        }
    
    
    
    render(){ 
        debugger
        return(<div> 
            {this.props.myPatients.length > 0 ? <button onClick={() => this.back()}>Back
        </button> : null} 
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
    debugger
    return { fetchMyPatients: (providerId) => dispatch(fetchMyPatients(providerId)), 
             addMyPatient: (provider_id, new_patient_info) => dispatch( addMyPatient(provider_id, new_patient_info) )
    }
} 



export default connect(mstp, mdtp)(ProviderPatients)