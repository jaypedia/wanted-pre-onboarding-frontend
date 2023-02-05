import { TodoProvider } from 'context/TodoProvider';
import { RouterProvider } from 'react-router';
import { router } from './router';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </div>
  );
};

export default App;
