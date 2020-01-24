import React from 'react';

import './App.scss';
import 'bootstrap/scss/bootstrap.scss';

import Header from './Header';
import Notes from './Notes';

function App() {
    return (
        <>
            <Header/>
            <main className="p-3 p-xl-5">
                <Notes/>
            </main>
        </>
    );
}

export default App;
