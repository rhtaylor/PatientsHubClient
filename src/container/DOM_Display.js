import {v1 as uuid} from 'uuid'
import React, { Component } from 'react' 
import {connect} from 'react-redux'  
import '../css/alert.css'
export default class DOM_Display extends Component{
    logicGate = () => { 
        debugger
        return typeof (this.props.loggedInData.signed_in) === "object" && this.props.loggedInData.signed_in[0] === 'LOADING' ?  <h1 className="softAlert">{this.props.loggedInData.signed_in[0]}</h1> : <ul> {this.props.loggedInData.signed_in.map((pro,i) =>  <li key={i} className='success'>{pro.name || pro}</li>) } </ul> 
    }
    
    render(){ 
        
        return (<div key={uuid()}>{this.logicGate()}</div>) 

} 
} 
 
