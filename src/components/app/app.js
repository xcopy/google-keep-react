import React from 'react';

import HeaderContainer from '../header/header-container';
import NotesContainer from '../notes/notes-container';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <NotesContainer/>
        </>
    );
};

export default App;
