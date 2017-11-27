import React from 'react';
import ReactDOM,{ render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));

