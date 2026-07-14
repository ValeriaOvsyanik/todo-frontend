import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { Todo } from '../../components/Todo';
import { TodoForm } from '../../components/TodoForm';
import './Main.scss';

export const Main: React.FC = () => {
  const { todos, refetch } = useTodos();

  return (
    <div className="main-container">
      <TodoForm onSuccess={refetch} />
      <ul className="main-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};