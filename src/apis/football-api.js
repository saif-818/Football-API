import api from './api';

const update = async (rsc) => {
    try {
      // const searchQuery = JSON.stringify(rsc);
    
      console.log(rsc);

      let response = await api.post('/api',rsc);   
      return new Promise((resolve,reject) => resolve(response.data));
      // return response.data;
      } catch(err) {
        console.log(err);
      }
}

export default update;
