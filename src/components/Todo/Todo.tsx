import React from 'react';
import { Todo as TodoType } from '../../types';
import './Todo.scss';

interface TodoProps {
  todo: TodoType;
  onDelete: (id: string) => void;
}

export const Todo: React.FC<TodoProps> = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <article className="todo-info">
        <h3 className="todo-title">{todo.title}</h3>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
      </article>
      <div className="todo-actions">
      <span className={`todo-status todo-status--${todo.status}`}>
        {todo.status}
      </span>
      <button
      className="todo-delete"
      onClick={() => onDelete(todo.id)}
      aria-label='удалить'> 🗑️ </button>
      </div>
    </li>
  );
};