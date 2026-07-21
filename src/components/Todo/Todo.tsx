import React from 'react';
import { Todo as TodoType } from '../../types';
import './Todo.scss';

interface TodoProps {
  todo: TodoType;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: { status?: string; isFavorite?: boolean }) => void;
}

export const Todo: React.FC<TodoProps> = ({ todo, onDelete, onUpdate }) => {
  const handleFavoriteToggle = () => {
    onUpdate(todo.id, { isFavorite: !todo.isFavorite });
  };

  return (
    <li className="todo-item">
      <article className="todo-info">
        <h3 className="todo-title">{todo.title}</h3>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
      </article>
      <div className="todo-actions">
        <button
          className="todo-favorite"
          onClick={handleFavoriteToggle}
          aria-label={todo.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        >
          {todo.isFavorite ? '❤️' : '🤍'}
        </button>
        <span className={`todo-status todo-status--${todo.status}`}>
          {todo.status}
        </span>
        <button
          className="todo-delete"
          onClick={() => onDelete(todo.id)}
          aria-label="Удалить задачу"
        > 🗑️ </button>
      </div>
    </li>
  );
};