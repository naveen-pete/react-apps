import React, { Component } from 'react';

import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 100,
      showErrorComponent: false
    }
  }

  mountCounter = () => this.setState({ mount: true });
  unmountCounter = () => this.setState({ mount: false });

  ignoreProp = () => this.setState({ ignoreProp: Math.random() });
  generateSeed = () => this.setState({ seed: parseInt(Math.random() * 100) });
  toggleError = () => this.setState(prevState => ({ showErrorComponent: !prevState.showErrorComponent }));

  render() {
    return <div>
      <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
      <br />
      <button onClick={this.ignoreProp}>Ignore Prop</button>
      <button onClick={this.generateSeed}>Generate Seed</button>
      <button onClick={this.toggleError}>Toggle Error</button>
      {
        this.state.mount &&
        <Counter
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed}
          showErrorComponent={this.state.showErrorComponent}
        />
      }
    </div>;
  }
}

export default App;
