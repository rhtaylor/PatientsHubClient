import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import {getCharts, getRecords} from '../actions/actions' 
import Chart from './Chart.js'  
import {
    BrowserRouter as Router,
        Route
} from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
//container component 
class VirtualCharts extends Component{  
    
    makeLinks = () =>{ 
        let {charts, patients, providers} = this.props  
        debugger
        if (charts.length === 1){
            return <h1>{ charts[0] }</h1>
        } else { 
            debugger
        return <ul> { charts.map(chart => <li key={chart.id}><Link to={`/charts/${chart.id}`}>{chart.date}</Link></li>  ) }</ul> 

        }
        debugger
    }
    componentDidMount(){
        this.props.getRecords()
    }

    render(){
    return(<div>{this.makeLinks()}</div>)
    }
}  
const mstp = (s) =>{ 
    debugger
    return {  
            charts: s.charts.charts,  
            providers: s.providers.providers, 
            patients: s.providers.patients 

            }
}
const mdtp = (dispatch) =>{
    return {  
    
    getCharts: () => {dispatch(getCharts())}, 
    
    getRecords: () => { dispatch(getRecords())} 
            } 
}
 
export default connect(mstp, mdtp)(VirtualCharts)