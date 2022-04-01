import axios from "axios";
import { COC_API_TOKEN } from "./coc";

const cocApi = axios.create({
  baseURL: "https://api.clashofclans.com/v1",
  headers: { Authorization: `Bearer ${COC_API_TOKEN}` },
});

export default cocApi;
