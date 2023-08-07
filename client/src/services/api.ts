import axios from "axios";
import { DataItem } from "../helpers/interface";

const apiUrl = "http://localhost:8181";

export const getData = async () => {
  try {
    const { data } = await axios.get<DataItem[]>(`${apiUrl}/data`);
    if (data) return Promise.resolve(data);
    return [];
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
