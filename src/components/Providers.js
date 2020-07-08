import React, { Component } from 'react'; 
import { connect } from 'react-redux';  
import {getProviders} from '../actions/actions'
import Provider from './Provider'  
import { Link, NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class Providers extends Component{
    constructor(props){
        super(props)
    } 
    // const renderMovies = Object.keys(movies).map(movieID =>
    //     <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    // );
    componentDidMount(){ 
        debugger
        this.props.getProviders()
    }
    makeProviders = () =>{ 
        debugger
        if (this.props.providers === "LOADING") {
            return (<h1>{this.props.providers}</h1>)
        } else { return this.props.providers.map((p,i) =>{ 
        return (<div> 
            <Link style={{ marginRight: '10px' }} key={p.id} to={`/providers/${p.id}`}><h1>{p.name}</h1></Link>
        
            <Route path={`${this.props.match.url}/:${p.id}`} component={<Provider  />} key={p.id + p.id} /></div>  )} ) }


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