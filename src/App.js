import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';
import Provider from './components/Provider' 
import Providers from './components/Providers'  
import Patients from './components/Patients'
import Form from './components/Form' 
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'; 

class App extends Component{  
  componentDidMount(){
    fetch('http://localhost:3000/patients') 
    .then(res => res.json()) 
    .then(data => console.log(data)) 
    .catch(err =>console.log(err))
  }
  render(){
  return (
    <div className="App">
      <header className="App-header"> 
        
        <img src={'./pt.jpg'} className="App-logo" alt="logo" /> 
        <br/> 
        <br/> 
        <Router > 
          <div> 
            <NavBar /> 
            <Route exact path="/SignUp" render={() => <Form />} /> 
            <Route exact path="/patients" render={()=><Patients />} />  
            <Route exact path="/providers" render={() =><Providers />} />
          </div> 
          </Router>
        
        <p>  
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
         
       
      </header>
    </div>
  );
}
}
export default App;
