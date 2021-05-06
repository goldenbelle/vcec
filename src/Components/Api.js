import axios from "axios";

const api = axios.create({
  baseURL: "https://vcec-college-default-rtdb.firebaseio.com/",
});

export const Api = {
  about: () => api.get("about"),
  college: () => api.get("college.json"),
  university: () => api.get("university"),
  master: () => api.get("master"),
  detail: (id) => api.get(`detail/${id}.json`),
  random: (id) => api.get(`${id}.json`),
};
