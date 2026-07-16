import React, { useState } from 'react';
import { useCreateTodo } from '../../hooks/useCreateTodo';
import './TodoForm.scss';

interface TodoFormProps {
  onSuccess: () => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { createTodo, isSubmitting } = useCreateTodo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    await createTodo(trimmedTitle, description.trim() || undefined);
    setTitle('');
    setDescription('');
    onSuccess();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field-wrapper">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting}
          className="form-input"
        />
      </div>
      <div className="form-field-wrapper">
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={isSubmitting}
          className="form-input"
        />
      </div>
      <div className="form-button-wrapper">
        <button
          type="submit"
          disabled={isSubmitting || !title.trim()}
          className="form-button"
        >
          Add
        </button>
      </div>
    </form>
  );
};