// src/config/axiosConfig.js
import axios from "axios";

const instance = axios.create({
  // baseURL: "https://cuidadorapi.azurewebsites.net/api",
  baseURL: "http://192.168.1.8:5003/api",
  timeout: 10000, // Aumenta el tiempo de espera a 10 segundos
});

export default instance;
