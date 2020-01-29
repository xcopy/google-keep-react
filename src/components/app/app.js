import React from 'react';

import {Navbar} from 'react-bootstrap';

import HeaderContainer from '../header/header-container';
import FilterLinks from '../filter-links';
import NotesContainer from '../notes/notes-container';
import NoteFormContainer from '../note-form/note-form-container';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <main className="px-3 pb-3 pt-0">
                <FilterLinks/>
                <NotesContainer/>
            </main>
            <Navbar fixed="bottom" bg="light" className="justify-content-center">
                <NoteFormContainer/>
            </Navbar>
        </>
    );
};

export default App;
