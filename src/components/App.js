import React from 'react';

import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

import {ButtonGroup, Navbar} from 'react-bootstrap';

import Header from './Header';
import NotesContainer from '../containers/NotesContainer';
import AddNote from '../containers/AddNote';
import FilterLink from '../containers/FilterLink';

import {Filters} from '../actions/FilterActions';

function App() {
    return (
        <>
            <Header/>
            <main className="px-3 pb-3 pt-0">
                <div className="text-center py-3">
                    <ButtonGroup>
                        <FilterLink filter={Filters.ACTIVE}>Notes</FilterLink>
                        <FilterLink filter={Filters.ARCHIVED}>Archive</FilterLink>
                        <FilterLink filter={Filters.DELETED}>Trash</FilterLink>
                    </ButtonGroup>
                </div>
                <NotesContainer/>
            </main>
            <Navbar fixed="bottom" bg="light" className="justify-content-center">
                <AddNote/>
            </Navbar>
        </>
    );
}

export default App;
