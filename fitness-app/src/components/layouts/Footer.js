import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ category, categories, onCategorySelect }) => {
  const index = category
    ? categories.findIndex(c => c === category) + 1
    : 0;

  const handleChange = (e, index) => {
    const category = index === 0 ? '' : categories[index - 1];
    onCategorySelect(category);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
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
