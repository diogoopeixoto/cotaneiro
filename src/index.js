import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import AppProvider from './context';

import './index.css';

ReactDOM.render(
  <AppProvider>
   <Routes />
  </AppProvider>,
  document.getElementById('root')
);
