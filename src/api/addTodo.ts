import { Todo } from '../types';

export const addTodo = async (title: string, description?: string): Promise<Todo> => {
  const response = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });

  if (!response.ok) {
    throw new Error('Failed to add todo');
  }

  return await response.json();
};