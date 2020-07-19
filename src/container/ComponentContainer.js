import React, { Component } from 'react' 
import {connect} from 'react-redux';  
import Forms from '../forms/Forms' 
import ProviderPatients from '../components/ProviderPatients';  
import RootContainer from '../container/RootContainer'  
import HomeComponent from './HomeComponent'  

import {signIn, fetchMyPatients} from '../actions/actions'
import SignIn from '../forms/SignIn' 
import SignUp from '../forms/SignUp'
import NavBar from '../components/Provider' 

import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

 

class ComponentContainer extends Component{ 
     

    
    render(){
        return(  
        
                
            <div className="patientshubimg" /*"App" */  >
                <header className="App-header" >
                    
                        <div>
                            <NavBar />
                            <Route exact path="/" render={() => <HomeComponent />} />
                            <Route exact path="/SignIn" render={(...routerProps) => <SignIn {...routerProps} signIn={this.props.signIn}/>} />
                            <Route exact path='/SignUp' render={()=> <SignUp /> } />  
                            <Route exact path='/ProviderPatients' render={() => <ProviderPatients />} />
                        </div>
                    
                </header> 
                </div>

               )
    }

}
 
let mstp =(state)=>{
    return {
        signed_in: state.providers.signed_in
    }
} 


const mdtp = (dispatch) => {
    return {
        signIn: (payload) => dispatch(signIn(payload)),
        fetchMyPatients: (providerObj) => dispatch(fetchMyPatients(providerObj))
    }
}


export default connect(mstp, mdtp)(ComponentContainer) 


  