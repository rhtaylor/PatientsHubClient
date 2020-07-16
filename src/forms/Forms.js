import React, { Component } from 'react' 
import NavBar from '../components/NavBar'
import SignUp from './SignUp'
import SignIn from './SignIn'   
import {signIn} from '../actions/actions'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    
} from 'react-router-dom'; 

 class Forms extends Component{ 
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
                        
                        <Route exact path="/SignIn" render={(routerProps) => <SignIn {...routerProps} key={10} signIn={this.props.signIn}/>} /> 
                        <Route exact path="/SignUp" render={(routerProps) => <SignUp {...routerProps} key={20}  />} />
                    </div>
                </Router >
                    
                 </div> 
                
                 )}}  


    const mstp =(state)=>{
        return{providers: state.providers}
    } 
    const mdtp =(dispatch)=>{
        return{
            signIn:(payload) => dispatch(signIn(payload)), 
        }
    }

    export default connect(mstp, mdtp)(Forms)