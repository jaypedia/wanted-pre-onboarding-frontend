import { TodoProvider } from 'context';
import { RouterProvider } from 'react-router';
import { router } from './router';

const App = () => {
  return (
    <div className="App">
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </div>
  );
};

export default App;
