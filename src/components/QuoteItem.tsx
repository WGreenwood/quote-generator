import styled from 'styled-components';
import React from 'react';
import Quote from '../services/Quote';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

type Params = {
  quote: Quote
};

const Container = styled.div`
text-align: center;
width: 70%;
padding-bottom: 12px;
`;

const MyPaper = styled(Paper)`
padding: 12px 6px;
`;

export default function QuoteItem({ quote }: Params) {
  return (
    <Container>
      <MyPaper elevation={3}>
        <Typography component="h4">
          {quote.author}
        </Typography>

        <Typography component="h5" paragraph>
          {quote.text}
        </Typography>
      </MyPaper>
    </Container>
  );
}
