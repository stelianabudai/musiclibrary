import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../shared/reducers';
import { BrowserRouter } from 'react-router-dom';

import App from '../shared/components/App';

const store = createStore(reducers, { ...window.APP_STATE });

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
