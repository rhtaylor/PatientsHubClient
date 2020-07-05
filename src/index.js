import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';  
import manageProviders from './reducers/manageProviders'; 
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

const store = createStore(manageProviders, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
