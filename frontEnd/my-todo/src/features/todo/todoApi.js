import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const fetchTodosAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodoAPI = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};