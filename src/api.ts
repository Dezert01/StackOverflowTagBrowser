import { config } from "./config";
import axios, { isAxiosError } from "axios";

const APP_TIMEOUT = 9_000;

export const api = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: APP_TIMEOUT,
});
