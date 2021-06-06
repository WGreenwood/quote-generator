import styled from 'styled-components';
import React from 'react';
import QuoteService from '../services/QuoteService';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

type Props = {

};

const Container = styled.div`
margin: 20px 0px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const ButtonsContainer = styled.div`
padding: 12px 42px;
display: flex;
justify-content: center;
`;

const _quoteService = new QuoteService();

export default function QuoteGenerator({ }: Props) {
  const onGetRandomQuote = async () => {
  };
  const onGetQuoteGardenQuote = async () => {
  };
  const onGetQuotableQuote = async () => {
  };
  const onGetBreakingBadQuote = async () => {
  };

  return (
    <Container>
      <Paper elevation={3}>
        <ButtonsContainer>
          <Button onClick={onGetRandomQuote}>
            Random
          </Button>
          <Button onClick={onGetQuoteGardenQuote}>
            Quote Garden
          </Button>
          <Button onClick={onGetQuotableQuote}>
            Quotable
          </Button>
          <Button onClick={onGetBreakingBadQuote}>
            Breaking Bad
          </Button>
        </ButtonsContainer>
      </Paper>
      <Divider />
    </Container>
  );
}
