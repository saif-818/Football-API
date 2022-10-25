import api from './api';

const update = async (rsc) => {
    try {
      const searchQuery = JSON.stringify(rsc);
      let response = await api.post('/api',searchQuery);   
      return response.data;
      } catch(err) {
        console.log(err);
      }
}

export default update;
