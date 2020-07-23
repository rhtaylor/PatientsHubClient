import React, { Component } from 'react'  
import {v1 as uuid} from 'uuid'
import { connect } from 'react-redux' 
import Chart from '../components/Chart' 
import Patient from '../components/Patient'
import {fetchMyCharts, fetchMyPatients} from '../actions/actions' 
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class VirtualCharts extends Component{
    
    componentDidMount =()=>{ 
        this.props.fetchMyCharts(this.props.provider_id); 
        this.props.fetchMyPatients(this.props.provider_id)
    }
    
    displayCharts =()=>{ 
        debugger
         if (this.props.charts === 'LOADING'){ 
         return <h1>{this.props.charts}</h1> } 
         else if (this.props.charts.length > 0){  
             return  this.props.charts.map(chart =>{
                 return (<div key={uuid()} >
                     <Router>
                         <Link style={{ marginRight: '10px' }} key={uuid()} to={`${this.props.match.path}/${chart.id}`} ><h1>{chart.date}</h1></Link>
                         <Route exact path={`${this.props.match.path}/${chart.id}`} render={(routerProps) => <Chart key={uuid()} patient_id={chart.patient_id} patients={this.props.patients} provider_id={chart.provider_id} {...routerProps} {...chart} />} />

                     </Router>
                 </div>)}) 
         }
    }
    
    render(){
    return(<div>{this.displayCharts()}</div>)
    } 

}  

const mstp =(state)=> { 
    debugger
    return{providers: state.providers.providers, 
           patients: state.providers.patients, 
           charts: state.charts.charts 
        }
} 

const mdtp = (dispatch)=>{
    return{
        fetchMyCharts: (provider_id) => dispatch(fetchMyCharts(provider_id)), 
        fetchMyPatients: (patient_id) => dispatch(fetchMyPatients(patient_id))

    }

}
export default connect(mstp, mdtp)(VirtualCharts)