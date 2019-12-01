import React, { useState } from 'react';

import DataDemo from './data/DataDemo';
import EventDemo from './event/EventDemo';

const App = () => {
  const [option, setOption] = useState('data');

  const handleClick = e => {
    setOption(e.target.value);
  };

  return <div className="container">
    <h2>Higher Order Components</h2>

    <div className="alert alert-primary">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          id="optionData"
          type="radio"
          name="option"
          defaultValue="data"
          onClick={handleClick}
          defaultChecked
        />
        <label className="form-check-label" htmlFor="optionData">Data</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          id="optionEvent"
          type="radio"
          name="option"
          defaultValue="event"
          onClick={handleClick}
        />
        <label className="form-check-label" htmlFor="optionEvent">Event</label>
      </div>
    </div>

    <div>
      {option === 'data' ? <DataDemo /> : <EventDemo />}
    </div>
  </div>
};

export default App;
