import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormatQuote from '@material-ui/icons/FormatQuote';
import React from 'react';


type Props = {
  title: string
}

function Header({ title }: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <FormatQuote />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar >
    </AppBar >
  );
}

export default Header;
