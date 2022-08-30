import axios from "axios";

const BASE_URL = "https://todo.api.devcode.gethired.id";
const axioscall = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });


export {axioscall}