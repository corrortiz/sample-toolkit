import React from 'react';
import ReactDOM from 'react-dom';
import RootRouts from './components/RootRouts'
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <RootRouts />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
