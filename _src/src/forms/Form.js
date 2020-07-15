import React, { Component } from 'react';
import fetchObj from '../components/fetchObj'
import '../css/SignIn.css';  
import thunk from 'redux-thunk';
import ActiveStorageProvider from 'react-activestorage-provider' 
import {PostForm} from '../components/Upload';
import { connect } from 'react-redux';
 
import {addProvider, addingProvider} from '../actions/actions'

class Form extends Component{ 
    state = {
        name: '', 
        job: '',
        email: '', 
        password: '', 
        password_confirmation: '', 
        
    } 
    //for adding avatar pic 

    // selected =(e)=>{
    //      e.persist() && e.preventDefault()
    //      const savedE = e
    //     debugger
    //     this.setState(prestate =>{
    //         return {...prestate, avatar: savedE.target.value}
    //     }) 
    //     console.log(this.state) 
    //     debugger
    // }
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
        debugger
    return(
        <div className="signIn"> 
        <form className="signIn" onSubmit={(e)=>this.handleSubmit(e)}> 
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
                {/* <label>Avatar </label> 
                // file upload for avatar pics
                <input type="file"
                    id="avatar" name="avatar"
                    accept="image/png, image/jpeg" onChange={(e)=>this.selected(e)}/> 
                    <br/> */}
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
    debugger
    return {s : s.providers}
}

export default connect(mstp, mdtp)(Form)