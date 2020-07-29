export default function manageProviders(state = {
    providers: [], 
    patients: [], 
    signed_in: [], 
    new_admit: []
}, action) {
    let {type} = action
        debugger
    switch(type){
        case "ADDING_PROVIDER": 
        debugger
        return {...state, providers: action.provider};  
        case 'ADDED_PROVIDER':  
        debugger
        return {...state, providers: [action.provider]}; 
        case 'ADDING_PATIENT':
        return { ...state, patients: [action.patients] } ;  
        case 'ADDING_NEW_PATIENT': 
        return {...state, new_admit: [action.patient] }
        case 'ADDED_PATIENT':  
        
        return {...state, new_admit: [action.patient]}; 
        case 'UPDATED':
        return {...state, new_admit: [] };
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
        debugger
        return { ...state, signed_in: state.signed_in.concat(action.provider) };   
        
        case 'SIGNED_IN':   
         
        action.provider.signed = true  
        debugger
         let newArray = [action.provider] 
         debugger
        return {...state, signed_in: newArray } 
        case 'GET_PROVIDER_PATIENTS': 
        debugger 
        return {...state, patients: action.patients}; 
        case 'GOT_PROVIDER_PATIENTS':  
        debugger
        return {...state, patients: action.patients};  
        case 'SIGN_OUT':  
        debugger
        return {...state }; 
        case 'OUT': 
        debugger
        return {...state, signed_in: state.signed_in.filter(p => p.id !== action.signed_out.id) } 
         
        default: 
        return state;
    }

}