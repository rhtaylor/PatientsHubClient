import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signOut} from '../actions/actions'

class SignOut extends Component{ 

    handleClick(){
         
        let id = this.props.providers["signed_in"][0].id;
        
        this.props.signOut(id)  
        
        this.props.history.push('/')
    }

    render(){
        return(<div><button onClick={()=>this.handleClick()}>Sign Out</button></div>)
    }

}  


const mstp =(s)=>{
    return{ 
        providers: s.providers 
    }
} 
const mdtp =(dispatch)=>{
    return{signOut: (id) => dispatch(signOut(id)) }
}

export default connect(mstp, mdtp)(SignOut)