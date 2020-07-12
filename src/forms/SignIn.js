import React, { Component } from 'react'  
import {signIn} from '../actions/actions'
import {connect} from 'react-redux' 
import Provider from '../components/Provider'
import '../css/SignIn.css' 
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
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
    
    handleSubmit =(event)=>{ 
        debugger
        event.preventDefault();
        this.props.signIn(this.state) 
        .then(res => res) 
        debugger
        
   
    } 


    checkForRedirect = () =>{  
        debugger  
        if (this.props.userIn.length >= 0 && this.props.userIn[0] !== undefined){ 
           
        let lastSignedIn = this.props.userIn.length === 0 ? 0 : this.props.userIn.length - 1
        let userIn = this.props.userIn 
        debugger 
        return (
                <Router ><Redirect to={{ pathname: "/providers/:id", state: {provider: userIn} }} /></Router> 
        )
      
       
        
        } }
        
        
    render(){  
        return ( 

        

        (           <div  className="signIn"> 
                    {this.checkForRedirect()}
                    <form className="signIn" onSubmit={(e) => this.handleSubmit(e)} > 
                   
                    <label>Email  </label>
                    <input name="email" placeholder="Enter email" value={this.state.email} 
                    onChange={this.handleChange} />
                    <br />
                    <label>Password  </label> 
                    <input type="password" name="password" placeholder="Enter password" value={this.state.password} 
                    onChange={(e)=>this.handleChange(e)} />  
                    <br/>
                    <input type="submit" value="chart it or it didn't happen"  />
                    </form>
                </div>

         ) )
    }
}

