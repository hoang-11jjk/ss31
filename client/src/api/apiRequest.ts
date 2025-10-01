import api from "./axiosInstance";
import type { AxiosResponse } from "axios";

export const apiRequest = async <T>(
  URL: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: unknown
): Promise<T> => {
  const res: AxiosResponse<T> = await api({ method, url: URL, data });
  return res.data;
};