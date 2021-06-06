import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Jumbotron from './Jumbotron';
import QuoteGenerator from './QuoteGenerator';
import PreviousQuotes from './PreviousQuotes';

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
