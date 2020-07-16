import React, { Component } from 'react' 
import NavBar from '../components/NavBar'
import SignUp from './SignUp'
import SignIn from './SignIn' 
import {
    BrowserRouter as Router,
    Route,
    
} from 'react-router-dom'; 

export default class Forms extends Component{ 
    constructor(props){
        super(props) 

    } 
    componentDidMount(){
       
    }

    render(){ 
        debugger
        return( 
                
                <div> 
                <Router >
                    <div>
                        <NavBar />
                        
                        <Route exact path="/SignIn" render={(routerProps) => <SignIn {...routerProps} key={10}/>} /> 
                        <Route exact path="/SignUp" render={(routerProps) => <SignUp {...routerProps} key={20}  />} />
                    </div>
                </Router >
                    
                 </div> 
                
                 )}}