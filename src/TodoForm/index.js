import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Create a new Task </label>
      <textarea value={newTodoValue} onChange={onChange} placeholder='What to do?' />
      <div className='TodoForm-buttonContainer'>
        <button type='button' className='TodoForm TodoForm-button--cancel' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit' className='TodoForm TodoForm-button--add'>
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
