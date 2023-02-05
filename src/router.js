import { SignIn, SignUp, Todo, Error, signInLoader, todoLoader, Root } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    loader: signInLoader,
  },
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
];

export const router = createBrowserRouter(routes, { basename: process.env.BASE_NAME });
