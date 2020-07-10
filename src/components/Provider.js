import React, { Component } from 'react';

export const Provider = ({name, email, job , id, created_at} ) => { 
    
        return (<div key={created_at} className="vc"> 
            <h1>YO</h1>
            <h1 key={id + name}>{name}</h1>
            <h2 key={email + id}>{email}</h2>
            <h2 key={job}>{job}</h2>
        </div>)


    }
