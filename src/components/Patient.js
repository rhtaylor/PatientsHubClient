import React, { Component } from 'react'; 
import '../css/vc.css'  
import {v1 as uuid} from 'uuid'

import NoteCard from '../forms/NoteCard'
export default class Patient extends Component{
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
        <NoteCard />
        </div>
        )
    }
}