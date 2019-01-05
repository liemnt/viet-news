import fetch from "isomorphic-unfetch";
import { BASE_URL } from "./const";
import { API_PATH } from "./path";
import queryString from "query-string";
import _ from "lodash";

export const getAllArticleByTimelineId = async timelineId => {
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLES_BY_TIMELINE_ID}${timelineId}/`
  );
  const resJson = await res.json();
  return resJson;
};

export const getArticleBySlug = async slug => {
  const res = await fetch(`${BASE_URL}${API_PATH.ARTICLE_BY_SLUG}${slug}`);
  const resJson = await res.json();
  return resJson;
};

export const getArticleById = async id => {
  const res = await fetch(`${BASE_URL}${API_PATH.ARTICLE_BY_ID}${id}`);
  const resJson = await res.json();
  return resJson;
};

export const getTimelineArticles = async (timelineId, page) => {
  const params = {
    isPaginator: "True",
    orderBy: "-published_at",
    page,
    timelineId: timelineId
  };
  const paramsString = queryString.stringify(params);
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLE_SEARCH}?${paramsString}`
  );
  const resJson = await res.json();
  return resJson;
};

export const getLatestArticles = async page => {
  const params = {
    isPaginator: "True",
    orderBy: "-published_at",
    page
  };
  const paramsString = queryString.stringify(params);
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLE_SEARCH}?${paramsString}`
  );
  const resJson = await res.json();
  return resJson;
};

export const getCategoryArticles = async (categoryId, page) => {
  const params = {
    isPaginator: "True",
    orderBy: "-published_at",
    page
  };
  if (categoryId && categoryId !== "latest") {
    _.set(params, "categoryId", categoryId);
  }
  const paramsString = queryString.stringify(params);
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLE_SEARCH}?${paramsString}`
  );
  const resJson = await res.json();
  return resJson;
};

export const getTagArticles = async (tagId, page) => {
  const params = {
    isPaginator: "True",
    orderBy: "-published_at",
    page,
    tagId
  };
  const paramsString = queryString.stringify(params);
  const res = await fetch(
    `${BASE_URL}${API_PATH.ARTICLE_SEARCH}?${paramsString}`
  );
  const resJson = await res.json();
  return resJson;
};
