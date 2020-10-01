import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StateProivder} from './state/stateProvider';
import {initialState} from './state/reducer'
import reducer from './state/reducer'
ReactDOM.render(
  <React.StrictMode>
 <StateProivder initialState = {initialState} reducer = {reducer}>
   <App />
 </StateProivder>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
