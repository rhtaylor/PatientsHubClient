import React, { Component } from 'react'  
import {v1 as uuid} from 'uuid'
import {connect} from 'react-redux'
class ProviderPatients extends Component{
    dataDisplay =()=>{ 
        debugger
        if (this.props.signed_in.length <= 1){
        return <ul key={uuid()}>{this.props.signed_in.map(p =>{
            debugger
           return  <li key={uuid()}>{p.name || p}</li>  } ) }</ul>
        } 
    }
    
    render(){ 
        debugger
        return(<div> 
            {this.dataDisplay()}
        </div>)
    }
} 
 
const mstp =(state)=>{
    return{myPatients: state.providers.patients, 
           signed_in: state.providers.signed_in
    }
}
export default connect(mstp)(ProviderPatients)