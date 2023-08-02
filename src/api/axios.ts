import axios from "axios";

export const instance = axios.create({
  baseURL: "https://react-http-eca7e-default-rtdb.firebaseio.com/todos.json",
  timeout: 5000,
  headers: { "Content-type": "application/json" },
});
