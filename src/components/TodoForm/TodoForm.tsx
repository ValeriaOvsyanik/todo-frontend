import React, { useState } from 'react';
import './TodoForm.scss';

interface TodoFormProps {
  onCreate: (title: string, description?: string) => Promise<void>;
  isSubmitting: boolean;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onCreate, isSubmitting }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await onCreate(title.trim(), description.trim() || undefined);
    setTitle('');
    setDescription('');
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