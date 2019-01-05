import fetch from "isomorphic-unfetch";
import { BASE_URL } from "./const";
import { API_PATH } from "./path";
import queryString from "query-string";

export const getTagsList = async tagsList => {
  const params = {
    list_id: tagsList
  };
  const res = await fetch(`${BASE_URL}${API_PATH.TAG_LIST}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  });
  const resJson = await res.json();
  return resJson;
};

export const getTagById = async tagId => {
  const res = await fetch(`${BASE_URL}${API_PATH.TAG_BY_ID}${tagId}/`);
  const resJson = await res.json();
  return resJson;
};

export const getLatestTag = async () => {
  const params = {
    isPaginator: "True",
    orderBy: "-created_at"
  };
  const stringParams = queryString.stringify(params);
  const res = await fetch(`${BASE_URL}${API_PATH.TAG_SEARCH}?${stringParams}`);
  const resJson = await res.json();
  return resJson;
};
