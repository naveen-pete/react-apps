import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ categories }) => {
  return (
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {categories.map(
          category => <Tab
            key={category}
            label={category}
          />
        )}
      </Tabs>
    </Paper>
  );
};

export default Footer;
