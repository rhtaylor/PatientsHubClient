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
        <h4 key={uuid()} className="initialism">Name: <i>{this.props.patient.name}</i></h4> 
        <h2 key={uuid()} >age: <i>{this.props.patient.age}</i></h2> 
        <h2 key={uuid()}>diagnosis: <i>{this.props.patient.diagnosis}</i></h2> 
        <NoteCard addNoteCard={this.props.addNoteToCard} / >
        </div>
        )
    }
} 

const mstp = (state)=>{ 
    return{state: state}
}
const mdtp =(dispatch)=>{
    return{ addNoteCard: (card, providerId, patientId) => dispatch(addNoteCard(card, providerId, patientId))


    }

}
export default connect(mstp, mdtp)(NoteCard)