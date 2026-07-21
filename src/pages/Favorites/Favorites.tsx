import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { useDeleteTodo } from '../../hooks/useDeleteTodo';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';
import { Todo } from '../../components/Todo';

export const Favorites: React.FC = () => {
  const { todos, isLoading, error, refetch } = useTodos();
  const { deleteTodoItem } = useDeleteTodo({ onSuccess: refetch });
  const { updateTodoItem } = useUpdateTodo({ onSuccess: refetch });

  const favorites = todos.filter((todo) => todo.isFavorite);

  return (
    <main className="favorites-container">
      <h1 className="favorites-title">Избранное</h1>
      {isLoading ? (
        <div className="favorites-loading">загрузка</div>
      ) : error ? (
        <div className="favorites-error">ошибка: {error}</div>
      ) : favorites.length === 0 ? (
        <div className="favorites-empty">Нет избранных задач</div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((todo) => (
            <li key={todo.id}>
              <Todo
                todo={todo}
                onDelete={deleteTodoItem}
                onUpdate={updateTodoItem}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};