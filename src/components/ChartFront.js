import React from 'react'   
import '../css/chartfront.css'


export const ChartFront = ({date, note, rest, providers, provider_id, patient_id, patients}) => { 
    debugger
    let thisChartProvider  =  providers.filter(p =>  p.id === provider_id )    
    debugger
    return( 
        <div class="view overlay"  >
        <div className="jumbotron" >
            <span><h3>{date}</h3></span> 
            < hr/>   
            <br />
            <br/>< hr/><h3>{thisChartProvider[0].name}</h3>
            <br/> 
            <br />
            <span><h3>{note}</h3></span>
        </div> 
        </div>
    )
}