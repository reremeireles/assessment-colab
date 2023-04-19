import axios from "axios";

const apiUrl = "https://randomuser.me/api";

export const api = axios.create({
  baseURL: apiUrl
});
