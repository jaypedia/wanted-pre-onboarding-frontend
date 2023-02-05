import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';
import { todoInstance } from 'apis/todoApi';

export const todoLoader = async () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (!userToken) {
    return redirect('/signin');
  }
  return todoInstance.get('');
};
