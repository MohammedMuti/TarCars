import axios from "axios";

const instance = axios.create({
  baseURL: "https://tarcars-server.onrender.com/api",
});

export default instance;
