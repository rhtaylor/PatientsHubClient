import React, { Component } from 'react'; 
import { connect } from 'react-redux';  
import {getProviders} from '../actions/actions'
import Provider from './Provider'
class Providers extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){ 
        debugger
        this.props.getProviders()
    }
    makeProviders = ()=>{ 
        debugger
        if (this.props.providers === "LOADING") {
            return (<h1>{this.props.providers}</h1>)
        } else { return this.props.providers.map((p,i) => <Provider key={i} provider={p} /> )}


    }

    render(){
        return(<div>{this.makeProviders()}</div>)
    }
}  

const mstp = s =>{
    return {providers: s.providers}
} 
const mdtp = dispatch =>{
    return{getProviders: ()=> dispatch(getProviders())}
}

export default connect(mstp, mdtp)(Providers)