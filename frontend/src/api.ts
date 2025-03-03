import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const fetchTodos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addTodo = async (name: string) => {
  const res = await axios.post(API_URL, { name, completed: false });
  return res.data;
};
