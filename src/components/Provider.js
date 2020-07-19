import React, { Component } from 'react';
import {v1 as uuid} from 'uuid' 
 const Provider =({name, email, job})=>{  
     debugger
        return ( 
            <div key={uuid()} className="jumbotron"> 
            
            <h1 key={uuid()}>{name}</h1>
            <h2 key={uuid()}>{email}</h2>
            <h2 key={uuid()}>{job}</h2>
        </div>)

        }
    


export default Provider