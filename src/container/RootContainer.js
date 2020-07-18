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
const mstp =(state)=>{ 
    debugger
    return{myPatients: state.providers.patients }
}

export default connect(mstp)(RootContainer)