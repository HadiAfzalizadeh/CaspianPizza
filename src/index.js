import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from "./store";
import "react-datepicker/dist/react-datepicker.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-tabs/style/react-tabs.css';
import 'react-multi-carousel/lib/styles.css';


<link href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" rel="stylesheet" />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
