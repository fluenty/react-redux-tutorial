import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";

import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

var storage = window.localStorage;

// For development purposes only
// storage.clear();

window.store.subscribe(() => {
  // console.log('store changed');
  // console.log(store.getState());
  saveState(store.getState());
});

const saveState = (state) => {
  try {
      let serializedState = JSON.stringify(state);
      storage.setItem("com.floatpays.state", serializedState);
      console.log(storage);
  }
  catch (err) {
    console.log(err);
  }
};

// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();