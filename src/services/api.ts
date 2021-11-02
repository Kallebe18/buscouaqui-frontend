import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://api.buscouaqui.com.br",
});
