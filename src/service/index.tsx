import axios from "axios";

//chamada da api

export const fetchWhatever = async () => {
  return await axios.get("http://backend.url");
};
