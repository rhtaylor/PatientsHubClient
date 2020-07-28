import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'; 
import './css/app.css'
import PatientHubApp from './container/PatientHubApp';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';  
import manageProviders from './reducers/manageProviders';
import manageCharts from './reducers/manageCharts'  
import { combineReducers } from "redux";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

    
function addMiddle(){
  return   applyMiddleware(thunk) &&
    window.__REDUX_DEVTOOLS_EXTENSION__  &&
     window.__REDUX_DEVTOOLS_EXTENSION__()

  
} 





const rootReducer = combineReducers({
  charts: manageCharts,
  providers: manageProviders
}); 
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <PatientHubApp className="app" />
  </Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
