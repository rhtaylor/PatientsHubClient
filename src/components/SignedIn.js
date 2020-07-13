import React, { Component } from 'react' 
import {connect} from 'react-redux'
import { fetchMyPatients, addNoteToChart} from '../actions/actions' 
import NoteForm from '../forms/NoteForm'
class SignedIn extends Component{ 
    

    componentDidMount(){ 
        let id = this.props.you.id 
        debugger
        this.props.fetchMyPatients(id)

    }

     showPatients = ()=>{ 
         debugger
     return   this.props.patients && this.props.patients.map((paty, i) => <NoteForm key={i} addNote={paty}  
         addNoteToChart={this.props.addNoteToChart}/> )
     }

    render(){
    return (
        <div className="SignedIn" id={this.props.you.id}>
            <h1>{this.props.you.name}</h1> 
        <ul>{this.showPatients()}</ul>
        </div>
    )}

} 
const mstp = (s)=>{
    return{ patients: s.providers.patients}
} 
const mdtp = (dispatch)=>{
    return{
        fetchMyPatients: (id)=> dispatch(fetchMyPatients(id)), 
        addNoteToChart: (...note) => dispatch(addNoteToChart(...note))
    }
}
export default connect(mstp, mdtp)(SignedIn)