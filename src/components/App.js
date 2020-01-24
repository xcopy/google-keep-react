import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Header from './Header';
import Notes from './Notes';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Notes/>
      </Container>
    </div>
  );
}

export default App;
