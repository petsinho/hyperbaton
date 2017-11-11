import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import registerServiceWorker from './registerServiceWorker';

console.log('index.js loaded');
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
