import { useLoaderData } from 'react-router-dom';
import { useInput } from 'hooks/useInput';
import { createTodo, updateTodo } from 'apis/todoApi';
import { useState } from 'react';

export const Todo = () => {
  const { data: loadedTodoData } = useLoaderData();
  const [todos, setTodos] = useState(loadedTodoData);
  const { value: todoValue, onReset: resetTodo, onChange: onTodoChange } = useInput();

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!todoValue) return;
    const newTodo = await createTodo({ todo: todoValue });
    setTodos((prev) => [...prev, newTodo]);
    resetTodo();
  };

  const handleCheckBoxChange = async (id, todo, isCompleted) => {
    const updatedTodo = await updateTodo(id, { todo, isCompleted: !isCompleted });
    setTodos((prev) => {
      const filtered = prev.filter((todo) => todo.id !== id);
      return [...filtered, updatedTodo];
    });
  };

  return (
    <>
      <h1>✅ Todo List</h1>
      <form onSubmit={handleCreateTodo}>
        <h3>➕ 새로운 할 일 추가하기</h3>
        <input data-testid="new-todo-input" value={todoValue} onChange={onTodoChange} />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>
      <h3>📄 나의 할 일 목록</h3>
      <ul>
        {todos.map(({ id, todo, isCompleted }) => {
          return (
            <li key={id}>
              <label>
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => handleCheckBoxChange(id, todo, isCompleted)}
                />
                <span>{todo}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
