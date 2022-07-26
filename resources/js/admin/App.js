import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './routes/Index';
import axios from 'axios';

import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang'
import en from './assets/lang/en.json'
import kh from './assets/lang/kh.json'
import th from './assets/lang/th.json'

setDefaultTranslations({en, kh, th})
setDefaultLanguage('en')

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

const App = () => {
    return (
        <>
            <AllRoutes/>
        </>
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}