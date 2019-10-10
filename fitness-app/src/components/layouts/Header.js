import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/dialogs/Create';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit" style={{ flex: 1 }}>
          Exercises Database
        </Typography>
        <CreateDialog />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
