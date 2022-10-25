import axios from 'axios';
const API_URL = 'http://localhost:8000';

// const KEY = 'ff7ffc5b6a5d7661608996d8cac97ead175d5b7cc3091d58d801bc3e30313d72';

export default axios.create({
      baseURL: API_URL,
    //   params: {
    //       engine: 'google',
    //       api_key: KEY,
    //   }
});
