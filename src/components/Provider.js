import React, { Component } from 'react';

export default class Provider extends Component{ 
    constructor(props){
        super(props)
    }
    render(){ 
        debugger 
        return (<div className="vc"> 
            <h1>YO{this.props.provider.name}</h1>
            <h2>{this.props.provider.email}</h2>
            <h2>{this.props.provider.job}</h2>
        </div>)


    }
}