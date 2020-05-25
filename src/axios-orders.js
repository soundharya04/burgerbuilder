import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-pro.firebaseio.com/",
});

export default instance;
