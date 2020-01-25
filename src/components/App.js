import React from 'react';

import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

import Header from './Header';
import NotesContainer from '../containers/NotesContainer';
import AddNote from './AddNote';

function App() {
    return (
        <>
            <Header/>
            <main className="p-3 p-xl-5">
                <NotesContainer/>
                <div className="text-center m-1">
                    <AddNote/>
                </div>
            </main>
        </>
    );
}

export default App;
