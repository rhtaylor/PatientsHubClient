export default function manageProviders(state = {
    providers: [], 
    patients: [], 
    signed_in: []
}, action) {
    let {type} = action
        
    switch(type){
        case "ADDING_PROVIDER":
        return {...state, providers: action.provider};  
        case 'ADDED_PROVIDER': 
        return {...state, providers: [...state.providers.concat(action.provider)]}; 
        case 'FETCHING_PATIENTS': 
        return {...state, patients: action.patients }; 
        case 'ADD_PATIENTS': 
        return {...state, patients: action.patients } ;
        case 'FETCHING_PROVIDERS': 
        return {...state, providers: action.providers} ;
        case 'ADD_PROVIDERS': 
        return {...state, providers: action.providers} ;
        case 'FULL_RECORDS': 
        return {...state, providers: action.providers, patients: action.patients};
        case 'GOT_RECORDS':  
         
              let newProviders =  action.charts.map(chart => chart.provider) 
              let newPatients = action.charts.map(chart => chart.patient)
        return {...state, providers: [...newProviders], patients: [...newPatients] }; 
        case 'SIGN_IN':  
        
        return {...state, providers: action.provider}; 
        case 'SIGNED_IN':   
         
        action.provider.signed_in = true 
        
        return {...state, signed_id: [action.provider] }
        default: 
        return state;
    }

}