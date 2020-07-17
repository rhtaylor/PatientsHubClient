import React, { Component } from 'react' 
import {connect} from 'react-redux'  
import '../css/alert.css'
export default class DOM_Display extends Component{
    logicGate = () => { 
        debugger
        return typeof(this.props.loggedInData.signed_in) === "object" ? <ul> {this.props.loggedInData.signed_in.map(pro => <li>{pro.name || pro}</li>)}</ul> : null
    }
    
    render(){ 
        
        return (<div><h1 className="softAlert">{this.logicGate()}</h1></div>) 

} 
} 
 
