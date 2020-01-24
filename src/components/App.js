import React from 'react';

import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

import Header from './Header';
import NotesContainer from '../containers/NotesContainer';

function App() {
    return (
        <>
            <Header/>
            <main className="p-3 p-xl-5">
                <NotesContainer/>
            </main>
        </>
    );
}

export default App;
