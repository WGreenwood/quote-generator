import styled from 'styled-components';
import React from 'react';
import QuoteService from '../services/QuoteService';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

type Props = {

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

export default function QuoteGenerator({ }: Props) {
  const onGetRandomQuote = async () => {
    console.log(await _quoteService.getRandomQuote());
  };
  const onGetQuoteGardenQuote = async () => {
    console.log(await _quoteService.getQuoteGardenQuote());
  };
  const onGetQuotableQuote = async () => {
    console.log(await _quoteService.getQuotableQuote());
  };
  const onGetBreakingBadQuote = async () => {
    console.log(await _quoteService.getBreakingBadQuote());
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
