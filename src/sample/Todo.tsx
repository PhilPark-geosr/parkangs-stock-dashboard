import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const todo = textarea.value.trim();
    if (todo) {
      //todo 업데이트
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      textarea.value = '';
    }
  };

  return (
    <div>
      <textarea data-testid="todo-input"></textarea>
      <button onClick={addTodo}>Add</button>
      <ul>{todos?.map((todo) => <li key={Math.random()}>{todo}</li>)}</ul>
    </div>
  );
};

export default Todo;
