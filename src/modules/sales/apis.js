import axios from 'axios';

const fetchLeads = () => axios.get('/dev/leads')
  .then((response) => response.data);

export default {
  fetchLeads,
};
