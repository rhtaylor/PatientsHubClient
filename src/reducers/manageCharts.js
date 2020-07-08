export default function manageCharts(state = {
    charts: [],
   
}, action) {
    let { type } = action
    debugger
    switch (type) {
        case "ADDING_CHARTS":
            return { ...state, charts: action.charts };
        case 'ADDED_CHARTS':
            return { ...state, charts: [...state.charts.concat(action.chart)] };
        case 'FETCHING_CHARTS':
            return { ...state, charts: action.charts }
        default:
            return state;
    }

}