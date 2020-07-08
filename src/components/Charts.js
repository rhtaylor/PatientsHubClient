import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import {getCharts} from '../actions/actions'
class VirtualCharts extends Component{
    render(){
        return(<div></div>)
    }
}  
const mstp = (s) =>{
    return { charts: s.charts}
}
const mdtp = (dispatch) =>{
    return { getCharts: dispatch => dispatch(getCharts())}
}
export default connect(mstp, mdtp)(VirtualCharts)