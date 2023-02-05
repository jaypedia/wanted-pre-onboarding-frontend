import { TodoProvider } from 'context/TodoProvider';
import { RouterProvider } from 'react-router';
import { router } from './router';

const App = () => {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
};

export default App;
