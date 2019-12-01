import React from 'react';

import withCounter from './withCounter';

const ClickCounter = ({ count, incrementCount }) => {
  return <div className="card bg-light">
    <div className="card-body">
      <h4>Click Counter</h4>
      <button className="btn btn-primary" onClick={incrementCount}>Clicked {count} times</button>
    </div>
  </div>;
};

export default withCounter(ClickCounter);
