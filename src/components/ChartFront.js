import React from 'react'  

import '../css/chartfront.css'
import '../css/cardFrontPaper.jpg'


export const ChartFront = ({date, note, rest, providers, provider_id, patient_id, patients}) => { 
    
    let thisChartProvider  =  providers.filter(p =>  p.id === provider_id )    
    debugger
    return(  
        <div className="jumbotron"  >
        <div  id="cardfront" >
                <span>{date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g)[0]}</span>  
            < hr/><h3 className="card-title">{thisChartProvider[0].name } :</h3>
            <span><h3 className="card-text">{note}</h3></span>
        </div>  
        </div>
    )
}