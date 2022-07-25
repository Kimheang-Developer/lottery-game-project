import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../website/routes/index'
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

const App = () => {
    return (
        <>
            <Routes/>
        </>
    )
}

export default App

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}