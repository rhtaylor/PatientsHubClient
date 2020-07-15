import React from 'react'; 
import HomeComponent from './HomeComponent' 
import Forms from '../forms/Forms' 
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
export default function PatientHubApp(){
    return( 
        < div className = "patientshubimg" /*"App" */ >
        <header className="App-header" >
        <HomeComponent /> 
        <Forms /> 
        </header>
        </div>
    )
}