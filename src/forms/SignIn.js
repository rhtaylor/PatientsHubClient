import React, { Component } from 'react' 
import {connect} from 'react-redux'

class SignIn extends Component{
    state = {
        email: '',
        password: '' 
    }

    handleChange = (e) =>{
        let save_e = e  
        debugger
        this.setState({ name: e.name })

    } 

    render(){
        return( 
        <form id="sign-in">
            <label>Email</label><br/>
            <input id="email" name="email" value={this.state.email}  
                onChange={()=>this.handleChange()}/>


        </form>)
    }
} 

export default connect()(SignIn)