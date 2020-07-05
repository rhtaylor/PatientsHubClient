import React, { Component } from 'react';
import fetchObj from './fetchObj'
import '../css/form.css';  
import thunk from 'redux-thunk';

import { connect } from 'react-redux';
 
import {addProvider, addingProvider} from '../actions/actions'

class Form extends Component{ 
    state = {
        name: '', 
        job: '',
        email: '', 
        password: '', 
        password_confirmation: ''
    } 

    handleChange =(event)=>{ 
          
        let {id, value } = event.target 
         
        
        this.setState({ [id] : value}); 
        console.log(this.state)
    } 
    handleSubmit =(e)=>{ 
        e.preventDefault() 
        let addProvider = this.props  
        debugger
        addProvider.addProvider(this.state)
        
        
        
    }

    render(){
    return(
        <div className="form"> 
        <form className="form" onSubmit={(e)=>this.handleSubmit(e)}> 
            <label>Name </label> 
                <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>  
            <br/>
            <label>Profession </label> 
                <input type="text" id="job" value={this.state.job} onChange={this.handleChange}/> 
            <br/>
            <label>Email </label>
                <input type="text" id="email" value={this.state.email} onChange={this.handleChange}/>
            <br /> 
            <label>Password </label>
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
            <br /> 
            <label>Password Confirmation</label>
                <input type="password" id="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>
            <br/>
            <input type="submit" value="Sign up" /*onClick={this.handleSubmit(this.state)}*/ />
        </form>
        </div>
    ) 
}
}   
const mdtp = (dispatch) => {
    return {
            addProvider: (state) => dispatch(addProvider(state))
            
    } 

}
const mstp = (s) => {
    return {s : s}
}

export default connect(mstp, mdtp)(Form)