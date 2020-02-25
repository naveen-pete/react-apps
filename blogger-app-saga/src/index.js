import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import configureStore from './store';
import App from './components/App';

const appStore = configureStore();

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
