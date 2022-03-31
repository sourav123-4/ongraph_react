import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import '../src/components/styles/index.css'
import Home from './Home'
ReactDOM.render(
  < BrowserRouter >
    <Home />
  </BrowserRouter >,
  document.getElementById('root')
);