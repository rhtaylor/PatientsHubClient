import React, { Component } from 'react'
import {connect} from 'react-redux' 
import AddMyPatient from './AddMyPatient'
import {addMyPatient, addNoteCard} from '../actions/actions' 
import NoteCard2 from '../forms/NoteCard2'
class AddMyPatientFormsContainer extends Component{

    componentDidMount(){
        debugger
    }

    handleSubmitFromAbove=(provider_id, state, event)=>{
        debugger 
        event.preventDefault()
      let x =  this.props.addMyPatient(this.props.provider_id, this.state)
        debugger
        this.props.history.goBack()
    } 
    handleSubmit2=()=>{
        debugger
    }


    render(){ 
        debugger
        return(
            <div>
                <AddMyPatient provider_id={this.props.provider_id} handleSubmitFromAbove={this.handleSubmitFromAbove} /> 
                <NoteCard2 provider_id={this.props.provider_id} handleSubmit={this.handleSubmit2} />
            </div>
        )

    }
    

} 

const mstp =(state)=>{  
    debugger
    return{patients: state.providers.patients, 
           charts: state.charts
    }

} 

const mdtp =(dispatch)=>{
    return { 

        addNoteCard: (provider_id, patient_id, payload) => dispatch(addNoteCard(provider_id, patient_id, payload)), 
        addMyPatient: (provider_id, new_patient_info) => dispatch(addMyPatient(provider_id, new_patient_info))

    } 

}

export default connect(mstp, mdtp)(AddMyPatientFormsContainer)