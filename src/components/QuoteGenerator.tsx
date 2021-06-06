import styled from 'styled-components';
import React from 'react';
import QuoteService from '../services/QuoteService';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Quote from '../services/Quote';

type Props = {
  addQuote: (quote: Quote) => void;
};

const Container = styled.div`
margin: 20px 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const ButtonsContainer = styled.div`
padding: 12px 42px;
`;

const _quoteService = new QuoteService();

export default function QuoteGenerator({ addQuote }: Props) {
  const onGetRandomQuote = async () => {
    const quote = await _quoteService.getRandomQuote();
    addQuote(quote);
  };
  const onGetQuoteGardenQuote = async () => {
    const quote = await _quoteService.getQuoteGardenQuote();
    addQuote(quote);
  };
  const onGetQuotableQuote = async () => {
    const quote = await _quoteService.getQuotableQuote();
    addQuote(quote);
  };
  const onGetBreakingBadQuote = async () => {
    const quote = await _quoteService.getBreakingBadQuote();
    addQuote(quote);
  };

  return (
    <Container>
      <Paper elevation={3}>
        <ButtonsContainer>
          <Button variant="outlined" color="primary" onClick={onGetRandomQuote}>
            Random
          </Button>
          <Button variant="outlined" onClick={onGetQuoteGardenQuote}>
            Quote Garden
          </Button>
          <Button variant="outlined" onClick={onGetQuotableQuote}>
            Quotable
          </Button>
          <Button variant="outlined" onClick={onGetBreakingBadQuote}>
            Breaking Bad
          </Button>
        </ButtonsContainer>
      </Paper>
    </Container>
  );
}
