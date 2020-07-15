import React, { Component } from 'react' 
import {connect} from 'react-redux' 
import NavBar from '../components/NavBar'  
import SignUp from '../forms/SignUp' 
import SignIn from '../forms/SignIn'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
class HomeComponent extends Component{
    render(){
        return(
                <div >
                <header  > 
                    <Router >
                        <div>
                            <NavBar  />  
                            <Route exact path="/SignUp" render={() => <SignUp />} />
                            <Route exact path="/SignIn" render={(routerProps) => <SignIn {...routerProps} userIn={this.props.signed_in} signIn={(arg) => this.props.signIn(arg)} />} /> 
                        </div> 
                    </Router >
                </header > 
                </div>
        )
    }
} 

export default connect()(HomeComponent)