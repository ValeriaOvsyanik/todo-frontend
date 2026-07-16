export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`/todos/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('ошибка удаления ');
  }
};