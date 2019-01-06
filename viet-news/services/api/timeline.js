import fetch from "isomorphic-unfetch";
import { BASE_URL } from "../../config";
import { API_PATH } from "./path";

export const getAllTimelines = async () => {
  const res = await fetch(`${BASE_URL}${API_PATH.ALL_TIMELINE}`);
  const resJson = await res.json();
  return resJson;
};

export const getTimelineById = async (timelineId) => {
    const res = await fetch(`${BASE_URL}${API_PATH.TIMELINE_BY_ID}${timelineId}/`);
    const resJson = await res.json();
    return resJson;
}