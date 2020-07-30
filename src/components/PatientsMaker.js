import React, { Component } from 'react' 
import {connect} from 'react-redux'
import { fetchMyCharts, fetchMyPatients } from '../actions/actions'
import Patient from './Patient' 
import {v1 as uuid} from 'uuid'
class PatientsMaker extends Component{ 
    makeMyPatients=()=>{ 
        debugger
        if (this.props.patients.length === 0 && this.props.patients){ 
            this.props.fetchMyPatients(this.props.signed_in[0].id) 
        } else if (this.props.patients.length === 1 && (this.props.patients[0] === 'LOADING' || 'You have zero patients')){
            return <h1>{this.props.patients[0]}</h1> 
        } else {
          return  this.props.patients.map(p => <div key={uuid()} ><Patient back={this.back} provider_id={this.props.signed_in[0].id} patient_id={p.id} match={this.props.match} location={this.props.location} histroy={this.props.histroy} key={uuid()} {...p} /></div>)
        } 
            
    }
    back = (e) => { 
        //depreciated for home NavLink
            e.preventDefault()
        debugger
    
        this.props.history.goBack()
    }


    render(){ 
        debugger
        return (<div>
            
                {this.makeMyPatients()}
            </div>
        )
    }
}  
const mstp =(state)=>{
    return{
        signed_in: state.providers.signed_in, 
        patients: state.providers.patients
    }
}  

const mdtp =(dispatch)=>{
    return{fetchMyPatients: (id) => dispatch(fetchMyPatients(id))}
}
export default connect(mstp, mdtp)(PatientsMaker)

