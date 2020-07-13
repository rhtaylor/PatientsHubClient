import React, { Component } from 'react' 
import {connect} from 'react-redux'
import { fetchMyPatients} from '../actions/actions' 
import NoteForm from '../forms/NoteForm'
class SignedIn extends Component{ 
    debugger  

    componentDidMount(){ 
        let id = this.props.you.id 
        debugger
        this.props.fetchMyPatients(id)

    }

     showPatients = ()=>{ 
         debugger
     return   this.props.patients && this.props.patients.map((paty, i) => <NoteForm key={i} addNote={paty} /> )
     }

    render(){
    return (
        <div className="SignedIn">
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
        fetchMyPatients: (id)=> dispatch(fetchMyPatients(id))
    }
}
export default connect(mstp, mdtp)(SignedIn)