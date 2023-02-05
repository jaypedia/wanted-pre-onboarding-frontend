import { createContext, useContext, useReducer } from 'react';

const initialState = {
  todos: [],
};

const TodoStateContext = createContext(initialState);
const TodoDispatchContext = createContext(null);

export const useTodoState = () => {
  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error('투두 State를 찾을 수 없습니다.');
  }
  return state;
};

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) {
    throw new Error('투두 Dispatch를 찾을 수 없습니다.');
  }
  return dispatch;
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'create': {
      const { newTodo } = action.payload;
      const { todos } = state;
      return {
        todos: [...todos, newTodo],
      };
    }
    case 'init': {
      const { todos } = action.payload;
      return {
        todos,
      };
    }
    case 'update': {
      const { updatedTodo, id } = action.payload;
      const { todos } = state;
      const filtered = todos.filter((todo) => todo.id !== id);
      return {
        todos: [...filtered, updatedTodo],
      };
    }
    case 'delete': {
      const { id } = action.payload;
      const { todos } = state;
      const filtered = todos.filter((todo) => todo.id !== id);
      return {
        todos: filtered,
      };
    }
    default:
      console.error('Invalid action type');
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
