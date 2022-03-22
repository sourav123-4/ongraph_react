import React from 'react';
import ReactDOM from 'react-dom';
import '../src/components/index.css'
import Stocks from './components/stocks'

ReactDOM.render(
  <React.StrictMode>
    <Stocks />
  </React.StrictMode>,
  document.getElementById('root')
);

