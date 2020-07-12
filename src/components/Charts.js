import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import {getCharts, getRecords} from '../actions/actions' 
import {ChartFront} from './ChartFront.js'   
import { withRouter } from 'react-router';
import {
    BrowserRouter as Router,
        Route
} from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
//container component 
class VirtualCharts extends Component{  
        constructor(props){
            super(props)
        } 

    makeLinks = ({match}) =>{ 
        let {charts, patients, providers} = this.props  
        debugger
        if (charts.length === 1){
            return <h1>{ charts[0] }</h1>
        } else { 
            debugger
        return <ul> { charts.map(chart =>{    
            return [<Router ><li key={chart.id}><Link to={`${this.props.match.url}/${chart.id}`}>{chart.date}</Link></li>    
            <Route exact path={`/charts/${chart.id}`} render={(routerProps) => <ChartFront {...routerProps} key={chart.id} rest={routerProps} providers={providers} provider_id={chart.provider_id} patients={patients} patient_id={chart.patient_id} date={chart.date} note={chart.note} />} /> 
            </Router>] 
                         } )}</ul> 

        } }
        // <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} />} />    }
    
        componentDidMount(){
        this.props.getRecords()
    }

    render(){
    return(
        <div> 
    
    <>{this.makeLinks(this.props)}</>   
    <hr/> 

    
    </div> 
    
    )
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