import { Todo } from '../types';

export const updateTodo = async (id: string, data: { status?: string; isFavorite?: boolean }): Promise<Todo> => {
  const response = await fetch(`/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('ошибка');
  }

  return await response.json();
};