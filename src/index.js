import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorisation'] = 'AUTH KEY';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log('request: ', request);
    return request;
}, error => {
    console.log('error: ', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('response: ', response);
    return response;
}, error => {
    console.log('error: ', error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
