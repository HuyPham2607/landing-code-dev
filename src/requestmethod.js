import axios from "axios";
const BASE_URL = "http://apidev.phantomal.site/dev";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
