import axios from 'axios';

import { API_END_POINT, USER_TOKEN_KEY } from 'constants';

const axiosConfig = {
  baseURL: `${API_END_POINT}/todos`,
  timeout: 10000,
};

export const todoInstance = axios.create(axiosConfig);

export const createTodo = async (newTodo) => {
  try {
    todoInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(USER_TOKEN_KEY)}`;
    todoInstance.defaults.headers.contentType = 'application/json';
    const response = await todoInstance.post('', newTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTodos = async () => {
  try {
    todoInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(USER_TOKEN_KEY)}`;
    const response = await todoInstance.get('');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    todoInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(USER_TOKEN_KEY)}`;
    todoInstance.defaults.headers.contentType = 'application/json';
    const response = await todoInstance.put(`/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    todoInstance.defaults.headers.Authorization = `Bearer ${localStorage.getItem(USER_TOKEN_KEY)}`;
    await todoInstance.delete(`/${id}`);
  } catch (error) {
    console.error(error);
  }
};
