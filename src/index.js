import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store , {persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/es/integration/react'

import './index.css';
import App from './App';


ReactDOM.render(
<Provider store={store} >
  <BrowserRouter store={store}>
  <PersistGate persistor={persistor} >
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
