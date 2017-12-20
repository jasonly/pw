import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet } from 'aphrodite/no-important';
import './reset.styles.js';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
