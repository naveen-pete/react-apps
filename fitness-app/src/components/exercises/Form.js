import React, { Component } from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const styles = {
  formControl: {
    width: 300
  }
};

class Form extends Component {
  state = this.getInitState();

  getInitState() {
    const { exercise } = this.props;

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { exercise } = props;
    if (!exercise) {
      return null;
    }

    const { id, title, description, muscles } = exercise;
    if (id !== state.id) {
      return {
        id,
        title,
        description,
        muscles
      };
    }

    return null;
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    });

  handleSubmit = () => {
    this.props.onExerciseSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state
    });

    this.setState(this.getInitState());
  }

  render() {
    const { title, description, muscles } = this.state;
    const { categories, exercise } = this.props;

    return <form>
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
      <br />
      <Button
        onClick={this.handleSubmit}
        color="primary"
        variant="contained"
        size="small"
      >
        {exercise ? 'Edit' : 'Create'}
      </Button>
    </form>;
  }
}

export default Form;
