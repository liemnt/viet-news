import fetch from "isomorphic-unfetch";
import { BASE_URL } from "../../config";
import { API_PATH } from "./path";

export const getAllCategories = async () => {
  const res = await fetch(`${BASE_URL}${API_PATH.ALL_CATEGORY}/`);
  const resJson = await res.json();
  return resJson;
};

export const getCategoryById = async categoryId => {
  const res = await fetch(`${BASE_URL}${API_PATH.CATEGORY_BY_ID}${categoryId}/`);
  const resJson = await res.json();
  return resJson;
};
