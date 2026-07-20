import { useState, useCallback } from 'react';
import { deleteTodo } from '../api';

interface useDeleteTodo {
    onSuccess?: () => void;
}

export const useDeleteTodo = ({ onSuccess }: useDeleteTodo = {}) => {
  const [error, setError] = useState<string | null>(null);

  const deleteTodoItem = useCallback(async (id: string) => {
    setError(null);
    try {
      await deleteTodo(id);
      onSuccess?.(); 
      return true;
    } catch (err) {
      setError('Ошибка удаления');
      console.error('Ошибка удаления:', err);
      return false;
    }
  }, [onSuccess]);

  return { deleteTodoItem, error };
};