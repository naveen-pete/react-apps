import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import { Delete, Edit } from "@material-ui/icons";
import Form from './Form';

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

const Exercises = ({
  exercises,
  category,
  onExerciseSelect,
  onExerciseDelete,
  onExerciseEdit,
  onExerciseEditSubmit,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left.'
  },
  exercise,
  editMode,
  categories
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={4}>
        <Paper style={styles.paper}>
          {exercises.map(([cat, exercises]) => {
            return !category || category === cat
              ? <Fragment key={cat}>
                <Typography
                  variant="h6"
                  style={styles.category}
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
      <Grid item sm={8}>
        <Paper style={styles.paper}>
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
                <Typography variant="subtitle2" style={styles.subtitle}>
                  {description}
                </Typography>
              </Fragment>
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercises;
