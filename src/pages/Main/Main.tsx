import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';
import './Main.scss';

export const Main: React.FC = () => {
  const { todos, isLoading, error, refetch } = useTodos();
  const { deleteTodoItem} = useDeleteTodo({ onSuccess: refetch });
  const { updateTodoItem } = useUpdateTodo({ onSuccess: refetch });

  return (
    <main className="main-container">
      <TodoForm onSuccess={refetch} />
      <TodoList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onDelete={deleteTodoItem}
        onUpdate={updateTodoItem}
      />
    </main>
  );
};