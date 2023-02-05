import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/todos`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(USER_TOKEN_KEY)}`,
    'Content-Type': 'application/json',
  },
};

export const todoInstance = axios.create(axiosConfig);

export const createTodo = async (newTodo) => {
  try {
    const response = await todoInstance.post('', newTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoInstance.get('');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await todoInstance.put(`/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    await todoInstance.delete(`/${id}`);
  } catch (error) {
    console.error(error);
  }
};
