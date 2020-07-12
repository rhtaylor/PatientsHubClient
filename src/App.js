import React, {Component} from 'react';  
import About from './components/About'
import logo from './logo.svg';
import './App.css'; 
import './css/app.css'
import Provider from './components/Provider' 
import Charts from './components/Charts'
import Providers from './components/Providers'  
import {SignedIn} from './components/stateless/SignedIn' 

//import Providers from './components/PsudoProviders' 
import Patients from './components/Patients'  
import SignIn from './forms/SignIn'
import { getProviders} from './actions/actions' 
import { signIn } from './actions/actions'
import Form from './forms/Form'  
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route, 
  Redirect
} from 'react-router-dom';
import NavBar from './components/NavBar'; 

class App extends Component{   
  
  componentDidMount(){ 
    debugger
    fetch('http://localhost:3000/api/v1/patients') 
    .then(res => res.json()) 
    .then(data => console.log(data)) 
    .catch(err =>console.log(err))
  } 
  checkLoggedIn = () =>{ 

    if (this.props.signed_in.length === 0){ 
        return <p>Zero currently Logged In</p> } 
        else {  debugger 
          let count = this.props.signed_in.length 
          
        return <p>{count} logged in</p>
  } 
}
  render(){ 
    debugger
  return (
    <div className="patientshubimg" /*"App" */  >
      <header  className="App-header" > 
        <br/>  
               <h1 className="patientshub">Patients Hub <p>chart it or it didn't happen</p></h1>  
        
        
        <Router > 
          <div> 
            <NavBar signedIn={this.props.signed_in.length > 0 ? true : false} /> 
            <Route exact path="/About" render={()=> <About />} />
            <Route exact path="/SignUp" render={() => <Form />} /> 
            <Route exact path="/SignIn" render={(routerProps) => <SignIn {...routerProps} userIn={this.props.signed_in} signIn={(arg) => this.props.signIn(arg)}/>} />
            <Route exact path="/charts" render={(routerProps) => <Charts {...routerProps} />} /> 
            <Route exact path="/patients" render={()=><Patients />} />  
            <Route exact path="/providers" render={(routerProps) =><Providers {...routerProps} providers={this.props.providers} getProviders={this.props.getProviders}/>} />
            <Route path="/providers/:id" render={()=><Provider provider={this.props.signed_in[0]} />} />
            {/* {this.props.signed_in.length >= 0 && this.props.signed_in[0] !== undefined ? <Redirect to="/providers/:id" /> : null } */}
            {/* <Route exact path={`/providers/${this.props.signed_in[0].id}`} render={() => <Provider key={this.props.signed_in[0].id} {...routerProps} provider={this.props.signed_in[0]} />} /> */} 
          </div> 
          </Router>
        
        <footer>{this.checkLoggedIn()}</footer>
      </header>  
      
    </div>
  );
}
} 

const mstp =(state)=>{ 
  debugger
  return{ 
    providers: state.providers, 
    signed_in: state.providers.signed_in 
              
  }
}  
const mdtp = (dispatch) =>{ 
return{ getProviders: () => dispatch(getProviders()), 
  
        signIn: (payload) => dispatch(signIn(payload))

}
  
}

export default connect(mstp, mdtp)(App);
