import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from '@material-ui/core';
import { Delete, Edit } from "@material-ui/icons";
import Form from './Form';

const styles = theme => ({
  paper: {
    padding: 20,
    marginTop: 3,
    marginBottom: 3,
    height: 500,
    overflowY: 'auto'
  },
  category: {
    textTransform: 'capitalize'
  },
  subtitle: {
    marginTop: 20
  }
});

const Exercises = ({
  classes,
  exercises,
  category,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  exercise,
  editMode,
  categories,
  onExerciseSelect,
  onExerciseDelete,
  onExerciseEdit,
  onExerciseEditSubmit
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercises.map(([cat, exercises]) => {
            return !category || category === cat
              ? <Fragment key={cat}>
                <Typography
                  variant="h6"
                  className={classes.category}
                >
                  {cat}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) =>
                    <ListItem
                      button
                      key={id}
                      onClick={() => onExerciseSelect(id)}>
                      <ListItemText primary={title} />

                      <ListItemSecondaryAction>
                        <IconButton edge="end" onClick={() => onExerciseEdit(id)}>
                          <Edit />
                        </IconButton>
                        <IconButton edge="end" onClick={() => onExerciseDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Fragment>
              : null
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {
            editMode
              ? <Form
                categories={categories}
                onExerciseSubmit={onExerciseEditSubmit}
                exercise={exercise}
              />
              : <Fragment>
                <Typography variant="h4">
                  {title}
                </Typography>
                <Typography variant="subtitle2" className={classes.subtitle}>
                  {description}
                </Typography>
              </Fragment>
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Exercises);
