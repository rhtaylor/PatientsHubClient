import React, { Component } from 'react'; 
import '../css/vc.css' 

import NoteCard from '../forms/NoteCard'
export default class Patient extends Component{
    constructor(props){
        super(props)
    } 
    componentDidMount(){

    } 
    render(){ 
        debugger 
        return( 
        <div className="vc"> 
        <h1>{this.props.patient.name}</h1> 
        <h2>{this.props.patient.age}</h2> 
        <h2>{this.props.patient.diagnosis}</h2> 
        <NoteCard />
        </div>
        )
    }
}