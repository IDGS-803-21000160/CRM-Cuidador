// src/config/axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://cuidadorapi.azurewebsites.net/api",
  timeout: 10000, // Aumenta el tiempo de espera a 10 segundos
});

export default instance;
