import { updateTodo } from 'apis/todoApi';
import { useInput } from 'hooks/useInput';
import { useState } from 'react';
import { useTodoDispatch } from 'context/TodoProvider';

export const TodoListItem = ({ id, todo, isCompleted, onCheckBoxChange, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { value: todoValue, onChange: onTodoChange } = useInput(todo);
  const todoDispacth = useTodoDispatch();

  const changeEditState = () => {
    setIsEdit((prev) => !prev);
  };

  const handleUpdateTodo = async () => {
    const updatedTodo = await updateTodo(id, { todo: todoValue, isCompleted });
    todoDispacth({
      type: 'update',
      payload: {
        id,
        updatedTodo,
      },
    });
    changeEditState();
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onCheckBoxChange} />
        {isEdit ? (
          <>
            <input data-testid="modify-input" onChange={onTodoChange} value={todoValue} />
            <button data-testid="submit-button" onClick={handleUpdateTodo}>
              제출
            </button>
            <button data-testid="cancel-button" onClick={changeEditState}>
              취소
            </button>
          </>
        ) : (
          <>
            <span>{todo}</span>
            <button data-testid="modify-button" onClick={changeEditState}>
              수정
            </button>
            <button data-testid="delete-button" onClick={onDelete}>
              삭제
            </button>
          </>
        )}
      </label>
    </li>
  );
};
