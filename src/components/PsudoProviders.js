import React from 'react'; 
import { connect } from 'react-redux';
import { getProviders } from '../actions/actions'
import Provider from './Provider'
import { Link, NavLink } from 'react-router-dom'; 
import { Route } from 'react-router-dom';
const Providers = ({match, providers, getProviders }) => {  
    debugger
        if (providers.length === 0){ getProviders()}  
        if (providers === "LOADING") {
            return (<h1>{providers}</h1>)
        } else {
            return providers.map((p, i) => {
                return (<div>
                    <Link style={{ marginRight: '10px' }} key={p.id} to={`/providers/${p.id}`}><h1>{p.name}</h1></Link>
                    <Route path={`${match.url}/:id`} component={Provider} />
                </div>)
            })
        }

    }


 


export default Providers