import React from 'react';
import { Todo } from '../Todo';
import { Todo as TodoType } from '../../types';

interface TodoListProps {
  todos: TodoType[];
  isLoading: boolean;
  error: string | null;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  isLoading,
  error,
  onDelete,
}) => {
  if (isLoading) {
    return (
      <div className="todo-list-loading">
        <span>Загрузка...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="todo-list-error">
        <span>ошибка: {error}</span>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="todo-list-empty">
        <span>заметок пока нет</span>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};