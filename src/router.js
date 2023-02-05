import { SignIn, SignUp, Todo, Error, signInLoader, todoLoader } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/signin',
    element: <SignIn />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />,
    loader: signInLoader,
  },
  {
    path: '/todo',
    element: <Todo />,
    errorElement: <Error />,
    loader: todoLoader,
  },
]);
