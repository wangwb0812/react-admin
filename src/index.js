import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/reset.scss';
import reportWebVitals from './reportWebVitals';
import Route from './router/index'
import './mock/index'
import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Route />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
