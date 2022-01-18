import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";

import './index.css';
import App from './App';


ReactDOM.render(
<Provider store={store} >
  <BrowserRouter store={store}>
    <App />
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
