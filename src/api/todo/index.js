import axios from '../../axios';

export const fetchAll = () => {
  return axios.get('/todos');
};

export const updateTodo = (payload) => {
  return axios.put(`/todos/${payload.id}`, payload);
};
