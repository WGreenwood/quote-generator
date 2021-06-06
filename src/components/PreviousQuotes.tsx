import styled from 'styled-components';
import React from 'react';
import Quote from '../services/Quote';
import QuoteItem from './QuoteItem';

type Props = {
  quotes: Array<Quote>
};

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export default function PreviousQuotes({ quotes }: Props) {
  if (quotes.length == 0) return <div></div>;
  return (
    <Container>
      {
        quotes.map(
          (quote) => (
            <QuoteItem
              quote={quote}
            />
          )
        )
      }
    </Container>
  )
}
