import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './routes/Index';

import { setDefaultLanguage, setDefaultTranslations } from 'react-multi-lang'
import en from './assets/lang/en.json'
import kh from './assets/lang/kh.json'
import th from './assets/lang/th.json'

setDefaultTranslations({en, kh, th})
setDefaultLanguage('en')

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