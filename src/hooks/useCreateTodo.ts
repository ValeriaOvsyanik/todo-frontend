import { useState, useCallback } from 'react';
import { addTodo } from '../api';
// import { Todo } from '../types';

export const useCreateTodo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTodo = useCallback(async (title: string, description?: string) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const newTodo = await addTodo(title, description);
      return newTodo;
    } catch (err) {
      setError('oшибк');
      console.error(err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return { createTodo, isSubmitting, error };
};