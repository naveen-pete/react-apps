import React, { Component } from 'react';

const ErrorComponent = props => <div>{props.obj.someProp}</div>;

class Counter extends Component {
  constructor(props) {
    console.log('Constructor');

    super(props);

    this.state = {
      counter: 0,
      seed: 0
    };
  }

  increment = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  };

  decrement = () => {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  };

  static getDerivedStateFromProps(props, state) {
    // console.log('props:', props);
    // console.log('state:', state);

    if (props.seed && state.seed !== props.seed) {
      console.log('Get Derived State From Props - UPDATE STATE');
      return {
        seed: props.seed,
        counter: props.seed
      };
    }

    console.log('Get Derived State From Props - DO NOT UPDATE STATE');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextProps.ignoreProp:', nextProps.ignoreProp);
    // console.log('this.props.ignoreProp:', this.props.ignoreProp);
    if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('Should Component Update - DO NOT RENDER');
      return false;
    }

    console.log('Should Component Update - RENDER');
    return true;
  }

  render() {
    console.log('Render');
    console.log('  state:', this.state);

    if (this.props.showErrorComponent && this.state.error) {
      return <div>We have encountered an error! {`Error: ${this.state.error.message}`}</div>;
    }

    return <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <div className="counter">
        Counter: {this.state.counter}
      </div>
      {this.props.showErrorComponent && <ErrorComponent />}
    </div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('--------------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('----------------------');
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch');

    this.setState({ error, info });
  }
}

export default Counter;
