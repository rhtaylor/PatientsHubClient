import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import {signIn, getProviders} from '../actions/actions'   
import Form from '../forms/Form'
import SignIn from '../forms/SignIn' 
import NavBar from '../components/NavBar'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'; 

class PatientsHubContainer extends Component{
    render(){
        return( <Route>
                <div> 
                     <NavBar />
                     <Route exact path="/SignUp" render={() => <Form />} /> 
                      
                     <Route exact path="/SignIn" render={(routerProps) => <SignIn {...routerProps} userIn={this.props.signed_in} signIn={(arg) => this.props.signIn(arg)} />} />
               </div> 
               </Route>)
    }

}  
const mstp =(state)=>{
    return{ 
        patients: state.patients, 
        providers: state.providers, 
        charts: state.charts

    }
} 
const mdtp =(dispatch)=>{
    return { 
        signIn: (payload) => dispatch(signIn(payload)), 
        getProviders: () => dispatch(getProviders()), 

    }
}

export default connect(mstp, mdtp)(PatientsHubContainer)