import React, { Component, Fragment } from 'react';
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

  handleCategorySelect = category => {
    this.setState({ category });
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id)
    }));
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }));
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));
  }

  render() {
    const { category, exercise } = this.state;
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header
          categories={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercises={exercises}
          exercise={exercise}
          category={category}
          onExerciseSelect={this.handleExerciseSelect}
          onExerciseDelete={this.handleExerciseDelete}
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
