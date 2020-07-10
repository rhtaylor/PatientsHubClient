import React, { Component } from 'react'; 
import { connect } from 'react-redux';  
import {getProviders} from '../actions/actions'
import {Provider} from './Provider'  
import { Link, NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class Providers extends Component{
    
    // const renderMovies = Object.keys(movies).map(movieID =>
    //     <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    // );
    componentDidMount(){ 
        debugger
        this.props.getProviders()
    }
    makeProviders = () =>{ 
        debugger
        if (this.props.providers.providers === "LOADING") {
            return (<h1>{this.props.providers.providers}</h1>)
        } else if (Array.isArray(this.props.providers.providers) && this.props.providers.providers.length > 0){ return this.props.providers.providers.map((p,i) =>{  
            debugger
        return (<div key={i}>  
            {/* <Provider provider={p} key={ p.id + i }/>  */}
            {/*below was for nested routes, maybe impliment when more time*/}
            <Link style={{ marginRight: '10px' }} key={p.id + p.id} to={`/providers/${p.id}`} ><h1>{p.name}</h1></Link>
            {/* <Route path={`${this.props.match.url}/:${p.id}`} render={(props) => <Provider {...props} provider={p} key={p.id + p.id}/>} />  } */} 
            {/* <Route exact path={this.props.match.url} render={() => <h3>Choose above</h3>} /> */}
            <Route exact path={`${this.props.match.path}/${p.id}`} render={(routerProps) => <Provider key={ p.id } {...routerProps} provider={p} />} />
                
                </div>
            )} ) }


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