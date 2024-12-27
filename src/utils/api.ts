import axios from "axios";

const API = axios.create({
  baseURL: "http://16.171.149.113:3000/api/v1",
  withCredentials: true,
});

export const setAuthHeader = (token: string) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const registerUser = async (data: unknown) => await API.post("/users/register", data);

const loginUser = async (data: unknown) => await API.post("/users/login", data);

const getUser = async () => await API.get("/users/details");

const logoutUser = async () => await API.post("/users/logout");

const updateUser = async (data: unknown) => await API.put("/users/update", data);

const deleteUser = async () => await API.delete("/users/delete");



const getHabits = async () => await API.get("/habits");

const createHabit = async (data: unknown) => await API.post("/habits/create", data);

const deleteHabit = async (id: string) => await API.delete(`/habits/delete/${id}`);

const updateHabit = async (id: string, data: unknown) => await API.put(`/habits/${id}`, data);

const getHabit = async (id: string) => await API.get(`/habits/${id}`);

export { registerUser, loginUser, getUser, logoutUser, updateUser, deleteUser, getHabits, createHabit, deleteHabit, updateHabit, getHabit };

export default API;
