import React, { Component } from 'react'  
import { connect } from 'react-redux'; 
import {v1 as uuid} from 'uuid'
import { getPatients, fetchMyPatients} from '../actions/actions' 
import Patient from './Patient'  
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
 

 class Patients extends Component{ 
     constructor(props){
         super(props) 
         this.state={
            provider_id: '', 
            patient_id: ''
         }
     }
    componentDidMount(){
         
        this.setState(preS =>{ 
            return Object.assign({}, preS, {provider_id: this.props.location.pathname.match(/[1-9]/)[0] }) 
        })
        if (this.props.patients.length === 0){ this.props.fetchMyPatients(this.props.location.pathname.match(/[1-9]/)[0]) }
        
    }  
    
    makePatients = () =>{  
        
        if (this.props.patients === "LOADING") {
            return (<h1 key={uuid()}>{this.props.patients}</h1>)
        } else if (this.props.patients.length > 0 ) { return this.props.patients.map((p, i) =>{ 
            
          return (<div key={uuid()} >  
              <Router>
              <Link style={{ marginRight: '10px' }} key={p.id + p.id} to={`${this.props.match.path}/${p.id}`} ><h1>{p.name}</h1></Link>
            <Route exact path={`${this.props.match.path}/${p.id}`} render={(routerProps) => <Patient key={ uuid() } provider_id={this.props.signed_in[0].id} patient_id={p.id} {...p} {...routerProps} />} />
            
              </Router>
                  </div>) })   }
  }
    render(){ 
        
    return (
    <div>{this.makePatients()}</div>
            )
    }

} 
const mstp = (s) =>{ 
    
    return {patients: s.providers.patients, 
            signed_in: s.providers.signed_in
    }
}
const mdtp = (dispatch) =>{ 
    return{getPatients: ()=> dispatch(getPatients()), 
        fetchMyPatients: (id)=> dispatch(fetchMyPatients(id))
       
    }
}
export default connect(mstp, mdtp)(Patients) 

