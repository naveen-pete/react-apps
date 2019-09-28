import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercises from './exercises';
import { muscles, exercises } from '../store';

class App extends Component {
  state = {
    exercises
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

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
        <Exercises
          exercises={exercises}
        />
        <Footer
          categories={muscles}
        />
      </Fragment>
    );
  }
}

export default App;
