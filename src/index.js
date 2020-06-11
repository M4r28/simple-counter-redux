import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

//STORE --> globalized state

//ACTION INCREMENT --> describes what you want to do
//Action is a function that returns an Object
const increment = ()=>{
  return{
    type: 'INCREMENT'
  }
}

const decrement = ()=>{
  return{
    type: 'DECREMENT'
  }
}


//REDUCER --> describes how Actions transform the state into the next state
//Reducer is a function that returns an Object

const counter = (state=0, action)=>{
 switch(action.type){
   case 'INCREMENT':
     return state + 1;
   case 'DECREMENT':
     return state - 1;
 }
}

//here Reducer is passed to the Store
let store = createStore(counter);

//Display Store in the console
store.subscribe(()=>console.log(store.getState()));

//Action is going to be called; Reducer is going to check which Action you specified and based on the Action it is going to modify the Store

//DISPATCH --> a way to execute an Action/ dispatch this Action to the Reducer
//we can send Action to the Reducer, Reducer is going to check what to do and then the Store gets updated 
store.dispatch(increment())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
