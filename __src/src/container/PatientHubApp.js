import React, { Component } from 'react'; 
import HomeComponent from './HomeComponent' 
import Forms from '../forms/Forms'   
import RootContainer from './RootContainer' 
import ComponentContainer from './ComponentContainer'
import '../css/index.css'; 
import '../App.css'
import '../css/app.css' 
import NavBar from '../components/NavBar' 
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

 class PatientHubApp extends Component{ 
    render(){
    return (
        < div className="patientshubimg"  >
            <header className="App-header"> 
            <Router > 
            <Route path="/" render={(routerProps) => <NavBar {...routerProps} signed_in={this.props.signed_in} />} />  
            <Route path="/" render={(routerProps)=> <ComponentContainer  {...routerProps}/> }/>  
            </Router>
            </header> 
        </div>
        ) 
    }
} 
 
const mstp =(state)=>{
return{signed_in: state.providers.signed_in, 
        new_admit: state.providers.new_admit

}

}
export default connect(mstp)(PatientHubApp)