import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { useCreateTodo } from '../../hooks/useCreateTodo';
import { Todo } from '../../components/Todo';
import { TodoForm } from '../../components/TodoForm';
import './Main.scss';

export const Main: React.FC = () => {
  const { todos, refetch } = useTodos();
  const { createTodo, isSubmitting } = useCreateTodo();

  const handleCreate = async (title: string, description?: string) => {
    await createTodo(title, description);
    refetch();
  };

  return (
    <div className="main-container">
      <TodoForm onCreate={handleCreate} isSubmitting={isSubmitting} />
      <ul className="main-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};