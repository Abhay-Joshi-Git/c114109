import axios from 'axios';

const fetchLeads = () => axios.get('/api/leads')
  .then(response => response.data);

export default {
  fetchLeads,
};
