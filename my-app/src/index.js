import React from 'react';
import ReactDOM from 'react-dom/client';
import 'whatwg-fetch';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
