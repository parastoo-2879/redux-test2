// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import proConfigureStore from "./Store2/store"
import * as proActions from "./Store2/project"
import * as actions  from "./Store/cart"
// import store from "./customStore/store";
import configureStore from "./Store/configureStore"



const store = configureStore()
// store.state = 1
store.dispatch(actions.itemadd({name:"pari"}))
store.dispatch(actions.itemadd({name:"ali"}))
store.dispatch(actions.itemadd({name:"ali"}))
store.dispatch(actions.itemadd({name:"pari"}))
store.dispatch(actions.itemadd({name:"ali"}))
store.dispatch(actions.itemReduce({name:"pari"}))
store.dispatch(actions.itemRemove({id:2}))
console.log(store.getState())

const store2 = proConfigureStore()
store2.dispatch(proActions.addPro({name:"one"}))
store2.dispatch(proActions.addPro({name:"one"}))
store2.dispatch(proActions.addPro({name:"two"}))
store2.dispatch(proActions.removePro({id:1}))
store2.dispatch(proActions.reducePro({name:"one"}))
store2.dispatch(proActions.reStatus({id:2}))
console.log(store2.getState())