import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {createStore} from "redux";
import { reducer } from "./reducers/index.js";



export const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

