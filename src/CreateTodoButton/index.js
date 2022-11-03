import React from 'react';
import './CreateToDoButton.css';

function CreateTodoButton() {
  const onClickButton = () => {
    alert('Aqui se deberia abrir el modal');
  };

  return (
    <button className='CreateTodoButton' onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
