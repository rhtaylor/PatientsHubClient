import React, { Component } from 'react' 
import HomeComponent from './HomeComponent' 
import ProviderPatients from '../components/Provider'
import {connect} from 'react-redux'
import { fetchMyPatients } from '../actions/actions'
class RootContainer extends Component{  
    state ={
        localCharts: [], 
        localProviders: { 
            providers: [], 
            signed_in: []
        }
    }  
    providerLoggedIn(){ 
       
    }

    pickProperComponent =()=>{ 
   
    if (this.props.myPatients.length === 0){return  <HomeComponent /> } 
    else if (this.props.signed_in[0] === 'LOADING'){ 
        return <HomeComponent patients={this.props.signed_in}/>
    } 
    
    else if (this.props.signed_in[0].id){  
        this.providerLoggedIn()
         this.props.fetchMyPatients(this.props.signed_in[0].id)  
        return < ProviderPatients /> }
   
    }
    componentDidMount(){ 
        debugger
        if (this.props.signed_in[0]){  
            let id = this.props.signed_in[0].id
                debugger
        this.props.fetchMyPatients(id || 1)
        }
    }
    render(){ 
        
        return(<div>
           {this.pickProperComponent()}
            
        </div>)
    }
}  
const mstp =(state)=>{ 
    debugger
    return{myPatients: state.providers.patients, 
           signed_in: state.providers.signed_in }
}
const mdtp =(dispatch) =>{
    return { fetchMyPatients: (providerObj)=> dispatch(fetchMyPatients(providerObj))}
}
export default connect(mstp, mdtp)(RootContainer)