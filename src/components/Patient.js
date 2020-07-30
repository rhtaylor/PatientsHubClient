import React, { Component } from 'react'; 
import '../css/vc.css'  
import {v1 as uuid} from 'uuid'
import {connect} from 'react-redux'
import NoteCard from '../forms/NoteCard'
import { addNoteCard, fetchMyPatients} from '../actions/actions'
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class Patient extends Component{
    constructor(props){
        super(props)
    } 
    componentDidMount(){
        
    }  
    
    proxyFetch =()=>{  

    setTimeout(this.props.fetchMyPatients(this.props.provider_id), 3000); 

    } 

    render(){ 
          
       return(<div key={uuid()} className="vc">  
        { this.props.charts.charts === 'UPDATING' || this.props.patients === 'LOADING' ? <h1>Loading</h1> : null } 
        
        <h4 key={uuid()} className="initialism">Name: <i>{this.props.name}</i></h4> 
        <h2 key={uuid()} >age: <i>{this.props.age}</i></h2> 
        <h2 key={uuid()}>diagnosis: <i>{this.props.diagnosis}</i></h2> 
        <footer> 
        
        <div>{this.props.charts.charts ===  'UPDATING' ? <h1>Loading</h1> : null } </div>
                <Router>
                <Link style={{ marginRight: '10px' }} key={uuid()} to={`${this.props.match.path}/${this.props.id}`} ><h1>Chart on Patient</h1></Link>
                <Route exact path={`${this.props.match.path}/${this.props.id}`} render={(routerProps) => <NoteCard {...routerProps} provider_id={this.props.provider_id} patient_id={this.props.patient_id} addNoteCard={this.props.addNoteCard} /> } />
                </Router>
        </footer> 
        
        </div>
        )
    }
} 
 


 
const mstp = (state)=>{  

    return{charts: state.charts, 
           patients: state.providers.patients
    }
}
const mdtp =(dispatch)=>{
    return{ addNoteCard: (card, providerId, patientId) => dispatch(addNoteCard(card, providerId, patientId)),
        }

}
export default connect(mstp, mdtp)(Patient)