import React, { Component } from 'react' 
import Patients from '../components/Patients'
import {connect} from 'react-redux' 
import Patient from '../components/Patient' 
import { NavLink, Link } from 'react-router-dom';
import {v1 as uuid} from 'uuid' 
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class MakePatients extends Component {

    makePatients = () => {
        debugger
        if (this.props.patients === "LOADING") {
            return (<h1 key={uuid()}>{this.props.patients}</h1>)
        } else if (this.props.patients.length > 0) {
            return this.props.patients.map((p, i) => {
                debugger
                return (<div key={uuid()} >
                    <Router>
                        <Link style={{ marginRight: '10px' }} key={p.id + p.id} to={`${this.props.match.path}/${p.id}`} ><h1>{p.name}</h1></Link>
                        <Route exact path={`${this.props.match.path}/${p.id}`} render={(routerProps) => <Patient key={uuid()} provider_id={this.props.signed_in[0].id} patient_id={p.id} {...p} {...routerProps} />} />

                    </Router>
                </div>)
            })
        } } 



    render(){ 

    return (<div>{this.makePatients()}</div>)
    
    }

} 


 const mstp=(state)=>{
     return{signed_in: state.providers.signed_in, 
            patients: state.providers.patients
    }
 }

export default connect(mstp)(MakePatients)