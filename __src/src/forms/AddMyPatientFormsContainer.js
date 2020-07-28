import React, { Component } from 'react'
import {connect} from 'react-redux' 
import AddMyPatient from './AddMyPatient'
import {addMyPatient, addNoteCard} from '../actions/actions' 
import NoteCard2 from '../forms/NoteCard2'
class AddMyPatientFormsContainer extends Component{

    componentDidMount(){
       
    }
    patientBack =()=>{ 
        debugger 
    
        return (this.props.new_admit.length === 0)  ? <AddMyPatient provider_id={this.props.provider_id} handleSubmitFromAbove={this.handleSubmitFromAbove} /> 
            : <NoteCard2 updateStateBasedonURL={this.props.updateStateBasedonURL} provider_id={this.props.provider_id} patient_id={this.props.new_admit} handleSubmit2={this.handleSubmit2} />

         
        
        } 


    handleSubmitFromAbove=(provider_id, state, event)=>{
         
        event.preventDefault()
        this.props.addMyPatient(provider_id, state)
        
      
        
    } 
    handleSubmit2=(pro_id, pat_id, payload, e)=>{
        debugger 
        e.preventDefault()   
        debugger 
        payload.date = Date()
        this.props.addNoteCard(pro_id, pat_id[0].id , payload) 
        this.props.updateStateBasedonURL('/ProviderPatients') 
        
        this.props.history.push('/ProviderPatients')
    }
    BackUp=()=>{  
        debugger
        this.props.updateStateBasedonURL('/ProviderPatients') 
        this.props.history.goBack()
    }

    render(){ 
        
        return(
            <div> 
                <button
                    className="button icon-left" onClick={()=>this.BackUp()}>
                    
                    Back
                    </button> 
                {this.patientBack()}    
                </div>
        )

    }
    

} 

const mstp =(state)=>{  
    debugger
    return{patients: state.providers.patients,  
           new_admit: state.providers.new_admit,
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