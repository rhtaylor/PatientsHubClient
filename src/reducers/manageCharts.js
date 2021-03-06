export default function manageCharts(state = {
    charts: [],
   
}, action) {
    let { type } = action
    debugger
    switch (type) {
        case "ADDING_CHARTS":
            return { ...state, charts: action.charts };
        case 'GOT_CHARTS':
            return { ...state, charts: action.charts }; 
        case 'GETTING_CHARTS': 
            return {...state, charts: action.payload}
        case 'FETCHING_CHARTS':
            return { ...state, charts: action.charts } 
        case 'FULL_RECORDS': 
        return {...state, charts: [action.charts] }
        case 'GOT_RECORDS':  
        let newCharts = action.charts.map(c => c.chart)
        return { ...state,  charts: [...newCharts] }
        case 'ADDING_NOTE':  
        debugger
        return {...state, charts: action.charts}
        case 'UPDATED':  
        debugger
        return {...state, charts: [action.charts]}
        default:
            return state;
    }

}