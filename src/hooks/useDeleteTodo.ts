import { useState, useCallback } from 'react';
import { deleteTodo } from '../api';

export const useDeleteTodo = () => {
  const [error, setError] = useState<string | null>(null);

  const deleteTodoItem = useCallback(async (id: string) => {
    setError(null);
    try {
      await deleteTodo(id);
      return true;
    } catch (err) {
      setError('Ошибка удаления');
      console.error('Ошибка удаления:', err);
      return false;
    }
  }, []);

  return { deleteTodoItem, error };
};