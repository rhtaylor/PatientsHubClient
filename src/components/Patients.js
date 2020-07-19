import React, { Component } from 'react'  
import { connect } from 'react-redux';
import {getPatients} from '../actions/actions' 
import Patient from './Patient'  
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
 

 class Patients extends Component{
    componentDidMount(){
        this.props.getPatients(); 
        debugger
    }  
    
    makePatients = () =>{  
        debugger
        if (this.props.patients === "LOADING") {
            return (<h1>{this.props.patients}</h1>)
        } else if (this.props.patients.length > 0 ) { return this.props.patients.map((p, i) =>{ 
            debugger
          return (<div > 
              <Router>
              <Link style={{ marginRight: '10px' }} key={p.id + p.id} to={`${this.props.match.path}/${p.id}`} ><h1>{p.name}</h1></Link>
            <Route exact path={`${this.props.match.path}/${p.id}`} render={(routerProps) => <Patient key={p.id} {...routerProps} patient={p} />} />
            
              </Router>
                  </div>) })   }
  }
    render(){ 
        debugger
    return (
    <div>{this.makePatients()}</div>
            )
    }

} 
const mstp = (s) =>{ 
    debugger
    return {patients: s.providers.patients}
}
const mdtp = (dispatch) =>{ 
    return{getPatients: ()=> dispatch(getPatients())}
}
export default connect(mstp, mdtp)(Patients)