import React, { Component, Fragment } from 'react';
import { CssBaseline } from "@material-ui/core";
import { Header, Footer } from './layouts';
import Exercises from './exercises';
import { muscles, exercises } from '../store';

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {}
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((acc, muscle) => ({
      ...acc,
      [muscle]: []
    }), {});

    return Object.entries(this.state.exercises.reduce((acc, exercise) => {
      const { muscles } = exercise;
      acc[muscles] = [...acc[muscles], exercise];
      return acc;
    }, initExercises));
  }

  handleCategorySelect = category =>
    this.setState({ category });

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id),
      editMode: false
    }));

  handleExerciseCreate = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));

  handleExerciseDelete = id =>
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(e => e.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }));

  handleExerciseEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id),
      editMode: true
    }));

  handleExerciseEditSubmit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: exercises.map(e => e.id === exercise.id
        ? { ...exercise } : { ...e }),
      exercise,
      editMode: false
    }));

  render() {
    const { category, exercise, editMode } = this.state;
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <CssBaseline />

        <Header
          categories={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

        <Exercises
          exercises={exercises}
          exercise={exercise}
          category={category}
          editMode={editMode}
          categories={muscles}
          onExerciseSelect={this.handleExerciseSelect}
          onExerciseDelete={this.handleExerciseDelete}
          onExerciseEdit={this.handleExerciseEdit}
          onExerciseEditSubmit={this.handleExerciseEditSubmit}
        />

        <Footer
          category={category}
          categories={muscles}
          onCategorySelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
