import React, { Component } from 'react' 

import {connect} from 'react-redux'
import '../css/SignIn.css' 

export default class SignIn extends Component{ 
    constructor(props){ 
    super(props)
    this.state = {
        email: '',
        password: '' 
    }  
    this.handleChange = this.handleChange.bind(this)
}

    handleChange = (e) =>{  
        e.preventDefault()
        let saveE = e.target 
        let namey = saveE.name
        let value = saveE.value
        debugger  
        if ( namey === "email" ){ 
             let newE = value 
                this.setState( preState => { 
          return {  email :  newE,
            password : preState.password
        } }) } else {
            let newP = value 
            this.setState( preState => {
                return {password: newP, 
                email : preState.email}
            })
        }  
            

        console.log(this.state)

    } 

    render(){
        return( <div  className="signIn">
                    <form> 
                    <label>Email  </label>
                    <input name="email" placeholder="Enter email" value={this.state.email} 
                    onChange={this.handleChange} /> 
                    <label>Password  </label> 
                    <input name="password" placeholder="Enter password" value={this.state.password} 
                    onChange={(e)=>this.handleChange(e)} />
                    </form>
                </div>

        )
    }
} 

