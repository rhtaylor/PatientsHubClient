import React, {Component} from 'react';  
import About from './components/About'
import logo from './logo.svg';
import './App.css';
import Provider from './components/Provider' 
import Providers from './components/Providers'  
//import Providers from './components/PsudoProviders' 
import Patients from './components/Patients' 
import { getProviders} from './actions/actions'
import Form from './components/Form'  
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'; 

class App extends Component{   
  
  componentDidMount(){ 
    debugger
    fetch('http://localhost:3000/patients') 
    .then(res => res.json()) 
    .then(data => console.log(data)) 
    .catch(err =>console.log(err))
  }
  render(){
  return (
    <div className="patientshubimg" /*className="App" */>
      <header /*className="App-header"*/> 
        <br/> 
        <h1 className="patientshub">Patients Hub</h1>
        <Router > 
          <div> 
            <NavBar /> 
            <Route exact path="/About" render={()=> <About />} />
            <Route exact path="/SignUp" render={() => <Form />} /> 
            <Route exact path="/patients" render={()=><Patients />} />  
            <Route exact path="/providers" render={(routerProps) =><Providers {...routerProps} providers={this.props.providers} getProviders={this.props.getProviders}/>} />
          </div> 
          </Router>
        {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies} />} /> */}
      
      </header>
    </div>
  );
}
} 

const mstp =(state)=>{
  return{ 
    providers: state.providers}
}  
const mdtp = (dispatch) =>{ 
return{ getProviders: () => dispatch(getProviders()) }
  
}

export default connect(mstp, mdtp)(App);
