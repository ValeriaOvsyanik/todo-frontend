import { useState, useCallback } from 'react';
import { updateTodo } from '../api';

interface UseUpdateTodo {
  onSuccess?: () => void;
}

export const useUpdateTodo = ({ onSuccess }: UseUpdateTodo = {}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateTodoItem = useCallback(async (id: string, data: { status?: string; isFavorite?: boolean }) => {
    setIsUpdating(true);
    setError(null);
    try {
      await updateTodo(id, data);
      onSuccess?.();
      return true;
    } catch (err) {
      setError('Ошибка добавления в избранное');
      console.error('Ошибка :', err);
      return false;
    } finally {
      setIsUpdating(false);
    }
  }, [onSuccess]);

  return { updateTodoItem, isUpdating, error };
};