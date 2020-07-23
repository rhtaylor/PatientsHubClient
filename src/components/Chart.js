import React, { Component } from 'react' 
import {v1 as uuid} from 'uuid' 
import { NavLink, Link } from 'react-router-dom'; 
import Patient from './Patient'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
export default class Chart extends Component{


    render(){ 
        debugger
        return(<div key={uuid()}>
                  <p>{this.props.date}</p>  
                  <p>{this.props.note}</p>
            <Router>
                <Link style={{ marginRight: '10px' }} key={uuid()} to={`${this.props.match.path}/${this.props.provider_id}/patients/${this.props.patient_id}`} ><h1>patient: {this.props.patient_id}</h1></Link>
                <Route exact path={`${this.props.match.path}/${this.props.provider_id}/patients/${this.props.patient_id}`} render={(routerProps) => <Patient key={uuid()} {...this.props.patients.filter(p => p.id === this.props.patient_id)[0]} />} />

            </Router>
                </div>)
    }

}