import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit">
          Exercises Database
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
