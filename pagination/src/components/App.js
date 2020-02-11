import React, { useState } from 'react';

import CustomPaginationActionsTable from './CustomPaginationActionsTable';
import { getTodos } from './api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [rowCount, setRowCount] = useState(0);

  const handleChange = (page, limit) => {
    getTodos(++page, limit)
      .then(response => {
        const totalCount = parseInt(response.headers.get('x-total-count'));
        if (!isNaN(totalCount)) {
          setRowCount(totalCount);
        }

        return response.json();
      })
      .then(todos => {
        setTodos(todos);
      })
      .catch(error => {
        console.log('Get todos failed.');
        console.log('Error:', error);
      });
  };

  return <div>
    <h3>Pagination Demo</h3>
    <CustomPaginationActionsTable
      rows={todos}
      rowCount={rowCount}
      onChange={handleChange}
    />
  </div>;
}

export default App;
