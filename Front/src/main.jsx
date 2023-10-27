import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import store from './Redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
