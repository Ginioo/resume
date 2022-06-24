import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
