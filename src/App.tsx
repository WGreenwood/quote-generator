import styled from 'styled-components';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import QuoteGenerator from './components/QuoteGenerator';
import PreviousQuotes from './components/PreviousQuotes';
import Quote from './services/Quote';

const ContentContainer = styled.div`
width: 100%;
display; flex;

justify-content: center;
align-items: stretch;
`;

export default function App() {
  var [previousQuotes, setPreviousQuotes] = React.useState<Array<Quote>>([]);

  const addQuote = (quote: Quote) => {
    setPreviousQuotes(quotes => {
      return [
        quote,
        ...quotes
      ];
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Quote Generator" />
      <Jumbotron />
      <ContentContainer>
        <QuoteGenerator addQuote={addQuote} />
        <PreviousQuotes quotes={previousQuotes} />
      </ContentContainer>
    </React.Fragment>
  );
}
