import React from 'react';

import HeaderContainer from '../header/header-container';
import NotesContainer from '../notes/notes-container';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <main className="px-3 pb-3 pt-0">
                <NotesContainer/>
            </main>
        </>
    );
};

export default App;
