export type TodoStatus = 'todo' | 'progress' | 'done';

export interface Todo {
  id: string;
  title: string;
  description?: string | null;
  status: TodoStatus;
}