import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2>
      You have completed {completedTodos} of {totalTodos} Tasks
    </h2>
  );
}

export { TodoCounter };
