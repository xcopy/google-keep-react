import React from 'react';

import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

import {Navbar} from 'react-bootstrap';

import Header from './Header';
import NotesContainer from '../containers/NotesContainer';
import AddNote from '../containers/AddNote';

function App() {
    return (
        <>
            <Header/>
            <main className="p-3 p-xl-5">
                <NotesContainer/>
            </main>
            <Navbar fixed="bottom" bg="light" className="justify-content-center">
                <AddNote/>
            </Navbar>
        </>
    );
}

export default App;
