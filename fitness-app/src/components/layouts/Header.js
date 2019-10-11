import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

const Header = ({ categories, onExerciseCreate }) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit" style={{ flex: 1 }}>
          Exercises Database
        </Typography>
        <CreateDialog
          categories={categories}
          onExerciseCreate={onExerciseCreate}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
