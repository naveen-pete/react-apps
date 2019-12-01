import React from 'react';

import withCounter from './withCounter';

const KeyupCounter = ({ count, incrementCount }) => {
  return <div className="card bg-light mt-3">
    <div className="card-body">
      <h4>KeyUp Counter</h4>
      <input className="form-control" type="text" onKeyUp={incrementCount} />
      <div>KeyUp event occurred {count} times</div>
    </div>
  </div>;
};

export default withCounter(KeyupCounter);
