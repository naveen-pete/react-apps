import React, { Component, Fragment } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from './Form';

export default class extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleExerciseSubmit = exercise => {
    this.handleToggle();
    this.props.onExerciseCreate(exercise);
  }

  render() {
    const { open } = this.state;
    const { categories } = this.props;

    return <Fragment>
      <Fab size="small" onClick={this.handleToggle}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
        <DialogTitle id="form-dialog-title">
          Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the form below.
          </DialogContentText>

          <Form
            categories={categories}
            onExerciseSubmit={this.handleExerciseSubmit}
          />

        </DialogContent>
      </Dialog>
    </Fragment>;
  }
}
