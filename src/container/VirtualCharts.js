import React, { Component } from 'react'  
import {v1 as uuid} from 'uuid'
import { connect } from 'react-redux' 
import Chart from '../components/Chart' 
import Patient from '../components/Patient'
import {fetchMyCharts} from '../actions/actions' 
import { NavLink, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class VirtualCharts extends Component{
    
    componentDidMount =()=>{ 
        debugger
        this.props.fetchMyCharts(this.props.provider_id);
    }
    
    displayCharts =()=>{ 
        debugger
         if (this.props.charts === 'LOADING'){ 
         return <h1>{this.props.charts}</h1> } 
         else if (this.props.charts.length > 0){  
             return  this.props.charts.map(chart =>{
                return (<div>
                 <Chart key={uuid()} info={chart} /> 
                 <Router>
                 <NavLink style={{ marginRight: '10px' }} to={`patients/${chart.patient_id}/`} >Patient # {chart.patient_id}</NavLink>
                 <Route exact path={`/patients/${chart.patient_id}`} render={(routerProps) => <Patient patient_id={chart.patient_id} {...routerProps} />} />
                 </Router > 
                 </div>
                )}) 
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
        fetchMyCharts: (provider_id) => dispatch(fetchMyCharts(provider_id))

    }

}
export default connect(mstp, mdtp)(VirtualCharts)