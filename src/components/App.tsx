import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Jumbotron from './Jumbotron';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Quote Generator" />
      <Jumbotron />
    </React.Fragment>
  );
}

export default App;
