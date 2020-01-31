import React from 'react';

import Header from '../header';
import NotesContainer from '../notes/notes-container';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

const App = () => {
    return (
        <>
            <Header/>
            <NotesContainer/>
        </>
    );
};

export default App;
