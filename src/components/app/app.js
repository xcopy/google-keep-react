import React from 'react';

import Header from '../header';
import Notes from '../notes';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

const App = () => {
    return (
        <>
            <Header/>
            <Notes/>
        </>
    );
};

export default App;
