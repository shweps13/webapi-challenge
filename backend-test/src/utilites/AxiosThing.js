  
import axios from 'axios';


export const AxiosThing = () => {

  return axios.create({
    baseURL: 'https://lambda-besprint1.herokuapp.com/api/',

  });
};

export default AxiosThing