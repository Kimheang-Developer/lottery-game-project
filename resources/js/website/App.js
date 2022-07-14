import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../website/routes/index'

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