import axios from '../../axios';

export const fetchAll = () => {
  return axios.get('/todos');
}
