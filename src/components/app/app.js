import React from 'react';

import {Navbar} from 'react-bootstrap';

import Header from '../header';
import FilterLinks from '../filter-links';
import NotesContainer from '../notes/notes-container';
import NoteForm from '../note-form/note-form-container';

import 'bootstrap/scss/bootstrap.scss';
import './app.scss';

const App = () => {
    return (
        <>
            <Header/>
            <main className="px-3 pb-3 pt-0">
                <FilterLinks/>
                <NotesContainer/>
            </main>
            <Navbar fixed="bottom" bg="light" className="justify-content-center">
                <NoteForm/>
            </Navbar>
        </>
    );
};

export default App;
