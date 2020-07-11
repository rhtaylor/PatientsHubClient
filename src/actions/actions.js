import SignIn from "../forms/SignIn";

export function addProvider(action){   
    debugger
    return (dispatch) => { 
        dispatch({type: "ADDING_PROVIDERS", provider: 'UPLOADING'});  
         debugger
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
    debugger
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
        debugger
        dispatch({type: 'SIGN_IN', provider: "LOADING"}); 
        return fetch('http://localhost:3000/api/v1/providers/login', {
            method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
    })
    .then(res =>{ debugger
        return res.json() }) 
    .then(data => { debugger 
        // This is throwing errors, Once functional will add 
        // a logged_in: true flag to the Provider object
      return  dispatch({type: 'SIGNED_IN', provider: data}) })
    .catch(err => alert(err.response.data.message))
    }

}
// export function fetchAstronauts() {
//     return (dispatch) => {
//         dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//         fetch('http://api.open-notify.org/astros.json')
//             .then(response => response.json())
//             .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//     };
// }