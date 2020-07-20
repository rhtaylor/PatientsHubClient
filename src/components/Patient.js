import React, { Component } from 'react'; 
import '../css/vc.css'  
import {v1 as uuid} from 'uuid'
import {connect} from 'react-redux'
import NoteCard from '../forms/NoteCard'
import { addNoteCard} from '../actions/actions'

class Patient extends Component{
    constructor(props){
        super(props)
    } 
    componentDidMount(){
        debugger
    }  
    

    render(){ 
        debugger 
        return( 
        <div key={uuid()} className="vc">  
        { this.props.charts.charts === 'UPDATING' ? <h1>Loading</h1> : null }
        <h4 key={uuid()} className="initialism">Name: <i>{this.props.patient.name}</i></h4> 
        <h2 key={uuid()} >age: <i>{this.props.patient.age}</i></h2> 
        <h2 key={uuid()}>diagnosis: <i>{this.props.patient.diagnosis}</i></h2> 
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
    return{charts: state.charts}
}
const mdtp =(dispatch)=>{
    return{ addNoteCard: (card, providerId, patientId) => dispatch(addNoteCard(card, providerId, patientId))


    }

}
export default connect(mstp, mdtp)(Patient)