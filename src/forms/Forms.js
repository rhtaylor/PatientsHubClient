import React, { Component } from 'react' 
import NavBar from '../components/NavBar' 
import {v1 as uuid} from 'uuid'
import SignUp from './SignUp'
import SignIn from './SignIn'   
import {signIn, fetchMyPatients} from '../actions/actions'
import {connect} from 'react-redux' 
import DOM_Display from '../container/DOM_Display'
import {
    BrowserRouter as Router,
    Route,
    
} from 'react-router-dom'; 

 class Forms extends React.PureComponent{ 
    constructor(props){
        super(props) 

    } 
    componentDidMount(){ 
        
       
    } 

   

    render(){ 
         
        
        return( 
                
                <div> 
                <Router > 
                  
                    <div>
                        <NavBar />
                        <DOM_Display loggedInData={this.props.providers} />
                        <Route exact path="/SignIn" render={(routerProps) => <SignIn {...routerProps} key={uuid()} signIn={this.props.signIn}/>} /> 
                        <Route exact path="/SignUp" render={(routerProps) => <SignUp {...routerProps} key={uuid()}  />} />
                    </div>
                </Router >
                    
                 </div> 
                
                 )}}  


    const mstp =(state)=>{ 
        
        return{providers: state.providers, 
               signed_in: state.providers.signed_in
            }
    } 
   

    export default connect()(Forms)