import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/reset.scss';
import reportWebVitals from './reportWebVitals';
import Route from './router/index'
import './mock/index'

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
