import axios from 'axios';
export const sendMessage=(data)=>{
    return axios.post("https://american-bus-api.herokuapp.com/api/publicblogs/contact-us",data);
}