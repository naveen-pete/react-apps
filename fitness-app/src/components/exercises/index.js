import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  },
  category: {
    textTransform: 'capitalize'
  },
  subtitle: {
    marginTop: 20
  }
};

const Exercises = ({ exercises }) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={4}>
        <Paper style={styles.paper}>
          {exercises.map(([category, exercises]) => {
            return <Fragment key={category}>
              <Typography
                variant="h6"
                style={styles.category}
              >
                {category}
              </Typography>
              <List component="ul">
                {exercises.map(({ id, title }) =>
                  <ListItem button key={id}>
                    <ListItemText primary={title} />
                  </ListItem>
                )}
              </List>
            </Fragment>
          })}
        </Paper>
      </Grid>
      <Grid item sm={8}>
        <Paper style={styles.paper}>
          <Typography variant="h4">
            Welcome!
          </Typography>
          <Typography variant="subtitle2" style={styles.subtitle}>
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
