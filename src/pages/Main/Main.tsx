import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';
import './Main.scss';

export const Main: React.FC = () => {
  const { todos, isLoading, error, refetch } = useTodos();
  const { deleteTodoItem} = useDeleteTodo();
  const handleDelete = async (id: string) => {
    const success = await deleteTodoItem(id);
    if (success) {
      refetch();
    }
  };

  return (
    <main className="main-container">
      <TodoForm onSuccess={refetch} />
      <TodoList
        todos={todos}
        isLoading={isLoading}
        error={error}
        onDelete={handleDelete}
      />
    </main>
  );
};