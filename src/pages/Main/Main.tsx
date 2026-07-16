import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';
import './Main.scss';

export const Main: React.FC = () => {
  const { todos, isLoading, error, refetch, removeTodo } = useTodos();

  return (
    <main className="main-container">
      <TodoForm onSuccess={refetch} />
      <TodoList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onDelete={removeTodo}
      />
    </main>
  );
};