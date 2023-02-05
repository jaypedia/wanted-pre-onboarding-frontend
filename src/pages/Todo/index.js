import { useLoaderData } from 'react-router-dom';

export const Todo = () => {
  const { data: todoData } = useLoaderData();

  return (
    <>
      <h1>✅ Todo List</h1>

      <h3>📄 나의 할 일 목록</h3>
      <ul>
        {todoData.map(({ id, todo, isCompleted }) => {
          return (
            <li key={id}>
              <label>
                <input type="checkbox" checked={isCompleted} />
                <span>{todo}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
