import React, { Component } from 'react' 
import HomeComponent from './HomeComponent'
import {connect} from 'react-redux'
class RootContainer extends Component{
    render(){
        return(<div>
            <HomeComponent />  
            
        </div>)
    }
} 

export default connect()(RootContainer)