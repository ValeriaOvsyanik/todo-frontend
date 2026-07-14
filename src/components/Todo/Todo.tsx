import React from 'react';
import { Todo as TodoType } from '../../types';
import './Todo.scss';

interface TodoProps {
  todo: TodoType;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <li className="todo-item">
      <div className="todo-info">
        <div className="todo-title">{todo.title}</div>
        {todo.description && (
          <div className="todo-description">{todo.description}</div>
        )}
      </div>
      <span className={`todo-status todo-status--${todo.status}`}>
        {todo.status}
      </span>
    </li>
  );
};