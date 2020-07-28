import React, { Component } from 'react' 
import {connect} from 'react-redux'
import { fetchMyCharts, fetchMyPatients } from '../actions/actions'
import Patient from './Patient' 
import {v1 as uuid} from 'uuid'
class PatientsMaker extends Component{ 
    makeMyPatients=()=>{ 
        debugger
        if (this.props.patients.length === 0 ){ 
            this.props.fetchMyPatients(this.props.signed_in[0].id) 
        } else if (this.props.patients.length === 1 && this.props.patients[0] === 'LOADING'){
            return <h1>{this.props.patients}</h1> 
        } else {
          return  this.props.patients.map(p => <div key={uuid()} ><Patient match={this.props.match} location={this.props.location} histroy={this.props.histroy} key={uuid()} {...p} /></div>)
        } 
            
    }

    render(){ 
        debugger
        return(
            <div>
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

