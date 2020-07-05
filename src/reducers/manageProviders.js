export default function manageProviders(state = {
    providers: [], 
    patients: []
}, action) {
    let {type} = action
        debugger
    switch(type){
        case "ADDING_PROVIDER":
        return {...state, providers: action.provider};  
        case 'ADDED_PROVIDER': 
        return {...state, providers: [...state.providers.concat(action.provider)]}; 
        case 'FETCHING_PATIENTS': 
        return {...state, patients: action.patients } 
        case 'ADD_PATIENTS': 
        return {...state, patients: action.patients } 
        case 'FETCHING_PROVIDERS': 
        return {...state, providers: action.providers} 
        case 'ADD_PROVIDERS': 
        return {...state, providers: action.providers}
        default: 
        return state;
    }

}