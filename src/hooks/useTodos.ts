import { useState, useEffect, useCallback } from 'react';
import { Todo } from '../types';
import { getTodoList } from '../api';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getTodoList();
      setTodos(data);
    } catch (err) {
      setError('oшибка');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  return { todos, isLoading, error, refetch: loadTodos };
};