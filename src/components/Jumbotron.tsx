import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import React from 'react';

const JumbotronDiv = styled.div`
background: #D8D8D8;
padding: 64px 0px 48px;
`;

function Jumbotron() {
  return (
    <JumbotronDiv>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Quote Generator
        </Typography>
        <Typography component="h5" align="center" paragraph>
          Generate quotes from various different services
        </Typography>
      </Container>
    </JumbotronDiv>
  );
}

export default Jumbotron;
