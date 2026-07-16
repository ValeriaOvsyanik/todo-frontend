import { Todo } from '../types';

export const getTodoList = async (): Promise<Todo[]> => {
  const response = await fetch('/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return await response.json();
};