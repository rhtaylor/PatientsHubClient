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
        case 'FETCHING_CHARTS':
            return { ...state, charts: action.charts } 
        case 'FULL_RECORDS': 
        return {...state, charts: [action.charts] }
        case 'GOT_RECORDS':  
        let newCharts = action.charts.map(c => c.chart)
        return { ...state,  charts: [...newCharts] }
        
        default:
            return state;
    }

}