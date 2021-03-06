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

    componentDidMount(){ 
         
        this.props[0].history.push('/SignIn')
       
    }

    handleChange = (e) =>{  
        e.preventDefault()
        let saveE = e.target 
        let namey = saveE.name
        let value = saveE.value
          
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
        
        event.preventDefault();
        this.props.signIn(this.state) 
        this.props[0].history.push('/ProviderPatients')
        
        
        // maybe use router push to render diff componet after the fetch?
    } 
     render(){   
         
        return (   <div className="signIn">
                    <form className="signIn" onSubmit={(e) => this.handleSubmit(e)}> 
                     
                   
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

         ) 
    }
}



