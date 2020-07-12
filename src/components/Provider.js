import React, { Component } from 'react';

export default class Provider extends Component{ 
    constructor(props){
        super(props)
    } 

        render(){
        return (<div key={this.props.provider.created_at} className="vc"> 
            <h1>YO</h1>
            <h1 key={this.props.provider.id}>{this.props.provider.name}</h1>
            <h2 key={this.props.provider.email}>{this.props.provider.email}</h2>
            <h2 key={this.props.provider.job}>{this.props.provider.job}</h2>
        </div>)

        }
    }
