import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {store,rrfProps}from "./store"
import { Provider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <App />
  </ReactReduxFirebaseProvider>

  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


