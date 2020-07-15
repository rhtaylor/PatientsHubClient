import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import './css/app.css'
import App from './App';
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
import NavBar from './components/NavBar';
    
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
    <App className="app" />
  </Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
