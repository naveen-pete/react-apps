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
    return Object.entries(this.state.exercises.reduce((acc, exercise) => {
      const { muscles } = exercise;
      acc[muscles] = acc[muscles] ?
        [...acc[muscles], exercise] :
        [exercise]
      return acc;
    }, {}));
  }

  handleCategorySelect = category => {
    this.setState({ category });
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(e => e.id === id)
    }));
  }

  render() {
    const { category, exercise } = this.state;
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
        <Exercises
          exercises={exercises}
          exercise={exercise}
          category={category}
          onExerciseSelect={this.handleExerciseSelect}
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
