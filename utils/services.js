import axios from 'axios';
import env from 'dotenv';

env.config();

export const fetchArticles = () => axios.get(`https://iamuchejude.com`, {
  headers: {
    'Content-type': 'application/json',
  }
});