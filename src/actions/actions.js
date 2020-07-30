export function fetchMyCharts(provider_id){
    return (dispatch) => {   
        
        dispatch({type: 'GETTING_CHARTS', payload: 'LOADING'}); 
        
        return fetch(`http://localhost:3000/api/v1/providers/${provider_id}/mycharts`) 
        .then(res => res.json()) 
        .then(data => dispatch({type: 'GOT_CHARTS', charts: data})) 
        .catch(err => alert(err))

}
}
export function addMyPatient(provider_id, new_patient_info){
     
    return (dispatch) => {dispatch({type: 'ADD_NEW_PATIENT', payload: 'ADDING_PATIENT'}); 
        return fetch(`http://localhost:3000/api/v1/providers/${provider_id}/patients/create`, {
            method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(new_patient_info)
        }).then(res => res.json()).then(data => dispatch({ type: 'ADDED_PATIENT', patient: data }))
            .catch(err => alert(err.response.data.message))

    } }

export function addProvider(action){   
    
    return (dispatch) => { 
        dispatch({type: "ADDING_PROVIDER", provider: 'LOADING'});  
         
        return fetch('http://localhost:3000/api/v1/providers/create', {
            method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify( action )
        }).then(res => res.json()).then(data => dispatch({ type: 'ADDED_PROVIDER', provider: data})) 
            .catch(err => alert(err.response.data.message))

        
       
}  }
 
export function addingProvider(type, data){ 
    switch(type){

    case "ADDING_PROVIDER":
    return {type: "ADDING_PROVIDER", provider: "PENDING"} 
    case "ADDED_PROVIDER":  
    
    return {type: "ADDED_PROVIDER", provider: data} 
    default: 
    return {type: 'NO TYPE'} 
    }
} 

export function getPatients(){
    return (dispatch) => {
                         
         dispatch({type: "FETCHING_PATIENTS", patients: "LOADING"}); 
         return fetch('http://localhost:3000/api/v1/patients') 
         .then(res => res.json()) 
         .then(data => dispatch({type: 'ADD_PATIENTS', patients: data} ))

    }
}

export function getProviders(){
    return (dispatch)=>{
        dispatch({type: 'FETCHING_PROVIDERS', providers: 'LOADING'}); 
        return fetch('http://localhost:3000/api/v1/providers') 
        .then(res => res.json()) 
        .then(data => dispatch({type: 'ADD_PROVIDERS', providers: data}))

    }
}
//virtual_charts
export function getCharts(){
    return (dispatch) =>{
        dispatch({type: "ADDING_CHARTS", charts: "LOADING"}); 
        return fetch('http://localhost:3000/api/v1/virtual_charts') 
        .then(res => res.json()) 
        .then(data => dispatch({type: 'GOT_CHARTS', charts: data}))
    }
} 

export function getRecords(){
    return (dispatch) => {
        dispatch({ type: "FULL_RECORDS", charts: "LOADING" , providers: 'LOADING', patients: 'LOADING' });
        return fetch('http://localhost:3000/api/v1/virtual_charts_full')
            .then(res => res.json())
            .then(data => dispatch({ type: 'GOT_RECORDS', charts: data }))


 }
} 

export function signIn(payload){   
    
    return (dispatch) =>{ 
        
        dispatch({type: 'SIGN_IN', provider: "LOADING"}); 
         return fetch('http://localhost:3000/api/v1/providers/login', {
            method: "POST",  
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
    })
    .then( res =>  res.json() ) 
    .then(data => dispatch( {type: 'SIGNED_IN', provider: data } )  )   
    
    .catch(err => alert(err)); 
      
}

}

export function fetchMyPatients(id = 0){  
    
    return (dispatch) =>{ 
        dispatch({type: 'GET_PROVIDER_PATIENTS', patients: 'LOADING'}); 
        return fetch(`http://localhost:3000/api/v1/providers/${id}/my_patients`) 
        .then(res => res.json()) 
        .then(data => dispatch({type: 'GOT_PROVIDER_PATIENTS', patients: data})
          )  }
}  

export function addNoteCard(provider_id, patient_id, payload){ 
    
    return (dispatch) =>{ dispatch({type: 'ADDING_NOTE', charts: "LOADING"});  
        
        return fetch(`http://localhost:3000/api/v1/providers/${provider_id}/${patient_id}/virtual_chart`, {
            method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
        }).then(res => res.json()) 
        .then(data => dispatch({type: 'UPDATED', charts: data}))
            .catch(err => alert(err.response.data.message))
        }
    
} 

export function signOut(id){  
    
    return (dispatch) => {  
        dispatch({type: 'SIGN_OUT', provider: 'LOGGING_OUT'}) ; 
        
        return fetch('http://localhost:3000/api/v1/providers/signout', { 
        method: "POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({id: id}) }) 
    .then(res => res.json())
      .then(data => dispatch({type: 'OUT', signed_out: data}) )
         .catch(err=> alert(err))     
        

    } }



    