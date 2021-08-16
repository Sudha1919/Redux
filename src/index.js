import React from 'react';
import ReactDOM from 'react-dom';

//Reducer components
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer1 from './reducer/reducer1';

const reduxstore= createStore(reducer1)
import App from './App';

ReactDOM.render(
  <Provider store={reduxstore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
