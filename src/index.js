import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//STORE --> globalized state

//ACTION INCREMENT --> describes what you want to do

//REDUCER --> describes how Actions transform the state into the next state

//Action is going to be called; Reducer is going to check which Action you specified and based on the Action it is going to modify the Store

//DISPATCH --> a way to execute an Action/ dispatch this Action to the Reducer
//we can send Action to the Reducer, Reducer is going to check what to do and then the Store gets updated 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
