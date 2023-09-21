import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8081",
  url: 'http://localhost:3000/'
});

export default instance;