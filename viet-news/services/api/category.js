import fetch from "isomorphic-unfetch";
import { BASE_URL } from "./const";
import { API_PATH } from "./path";

export const getAllCategories = async () => {
  const res = await fetch(`${BASE_URL}${API_PATH.ALL_CATEGORY}`);
  const resJson = await res.json();
  return resJson;
};
