  
import axios from 'axios';


export const AxiosThing = () => {

  return axios.create({
    baseURL: 'http://localhost:5000/api/',

  });
};

export default AxiosThing