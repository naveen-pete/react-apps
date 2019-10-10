import React, { Component, Fragment } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  formControl: {
    width: 500
  }
};

export default class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState(prevState => ({
      exercise: {
        ...prevState.exercise,
        [name]: value
      }
    }));
  }

  handleSubmit = () => {
    const { exercise } = this.state;
    this.props.onExerciseCreate({
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
    });

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    });
  }

  render() {
    const { open, exercise: { title, description, muscles } } = this.state;
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
          <form>
            <TextField
              label="Title"
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
              style={styles.formControl}
            />
            <br />
            <FormControl style={styles.formControl}>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={muscles}
                onChange={this.handleChange('muscles')}
              >
                {categories.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>)
                )}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Description"
              multiline
              rows="4"
              value={description}
              onChange={this.handleChange('description')}
              margin="normal"
              style={styles.formControl}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleSubmit}
            color="primary"
            variant="contained"
            size="small"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>;
  }
}
