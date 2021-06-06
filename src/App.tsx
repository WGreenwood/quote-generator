import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import QuoteGenerator from './components/QuoteGenerator';
import PreviousQuotes from './components/PreviousQuotes';

export default function App() {
  var [previousQuotes, setPreviousQuotes] = React.useState([]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Quote Generator" />
      <Jumbotron />
      <QuoteGenerator />
      <PreviousQuotes />
    </React.Fragment>
  );
}
