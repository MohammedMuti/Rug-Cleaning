import axios from "axios";

const instance = axios.create({
  baseURL: "https:// http://localhost:4000/",
});

// http://localhost:8000/api
// https://tarcars-server.onrender.com/api

export default instance;
