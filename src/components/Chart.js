import React, { Component } from 'react' 
import {v1 as uuid} from 'uuid'
export default class Chart extends Component{


    render(){ 
        debugger
        return(<div key={uuid()}>
                  <p>{this.props.info.date}</p>  
                  <p>{this.props.info.note}</p>

                </div>)
    }

}