import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import NavBar from '../components/NavBar'  
import SignUp from '../forms/SignUp' 
import SignIn from '../forms/SignIn' 
import '../css/index.css';
import '../css/app.css' 
import '../App.css';

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
class HomeComponent extends Component{ 
    componentDidMount(){
        debugger
    }
    
    componentGate =()=>{
        debugger
    } 

    render(){
        return(
            < div className="patientshubimg"  >
                <header className="App-header" > 
                {this.componentGate()}
                { (this.props.patients) ? <h1>{this.props.patients[0]}</h1>  : 
                    <h1 className="patientshub">Patients Hub <p>chart it or it didn't happen</p></h1> 
        }
                </header > 
                </div>
        )
    }
} 

export default connect()(HomeComponent)