import axios from '../../axios';

export const fetchAll = () => {
  return axios.get('/todos');
};

export const update = (payload) => {
  return axios.put(`/todos/${payload.id}`, payload);
};

export const remove = (id) => {
  return axios.delete(`/todos/${id}`);
};
