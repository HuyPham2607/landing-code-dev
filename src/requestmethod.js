import axios from "axios";
const BASE_URL =
  "https://thesisloadbalancer-482548701.ap-southeast-2.elb.amazonaws.com";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
