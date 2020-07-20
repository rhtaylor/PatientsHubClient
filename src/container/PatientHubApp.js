import React from 'react'; 
import HomeComponent from './HomeComponent' 
import Forms from '../forms/Forms'   
import RootContainer from './RootContainer' 
import ComponentContainer from './ComponentContainer'
import '../css/index.css'; 
import '../App.css'
import '../css/app.css' 
import NavBar from '../components/NavBar'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

export default function PatientHubApp(){ 

    return (
        < div className="patientshubimg" /*"App" */ >
            <header className="App-header" > 
            <Router > 
        `   <Route exact path="/" render={(routerProps) => <NavBar {...routerProps} />} />  
            <ComponentContainer  /> 
            </Router>
            </header> 
        </div>
        )
}