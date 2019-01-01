import { createSelector } from "reselect";

const root = state => state.getIn(["home", "articlesListByTimeline"]);

const isLoading = () =>
  createSelector(
    root,
    state => state.get("isLoading")
  );

const articlesByTimeline = () =>
  createSelector(
    root,
    state => state.get("articlesByTimeline")
  );

export { isLoading, articlesByTimeline };
