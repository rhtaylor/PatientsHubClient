import React, { Component } from 'react'; 
import '../css/vc.css'  
import {v1 as uuid} from 'uuid'
import {connect} from 'react-redux'
import NoteCard from '../forms/NoteCard'
import { addNoteCard, fetchMyPatients} from '../actions/actions'

class Patient extends Component{
    constructor(props){
        super(props)
    } 
    componentDidMount(){
        debugger
    }  
    
    proxyFetch =()=>{  

    setTimeout(this.props.fetchMyPatients(this.props.provider_id), 3000); 

    } 

    render(){ 
        debugger  
       return(<div key={uuid()} className="vc">  
        { this.props.charts.charts === 'UPDATING' || this.props.patients === 'LOADING' ? <h1>Loading</h1> : null } 
        
        <h4 key={uuid()} className="initialism">Name: <i>{this.props.name}</i></h4> 
        <h2 key={uuid()} >age: <i>{this.props.age}</i></h2> 
        <h2 key={uuid()}>diagnosis: <i>{this.props.diagnosis}</i></h2> 
        <footer> 
           
        <div>{this.props.charts.charts ===  'UPDATING' ? <h1>Loading</h1> : null } </div>
        <NoteCard provider_id={this.props.provider_id} patient_id={this.props.patient_id} addNoteCard={this.props.addNoteCard} / >
        </footer> 
        
        </div>
        )
    }
} 
 


 
const mstp = (state)=>{  
debugger
    return{charts: state.charts, 
           patients: state.providers.patients
    }
}
const mdtp =(dispatch)=>{
    return{ addNoteCard: (card, providerId, patientId) => dispatch(addNoteCard(card, providerId, patientId)),
        }

}
export default connect(mstp, mdtp)(Patient)