import { createSelector } from "reselect";

const root = state => state.getIn(["home", "timelines"]);

const isLoading = () =>
  createSelector(
    root,
    state => state.get("isLoading")
  );

const timelines = () =>
  createSelector(
    root,
    state => state.get("timeline")
  );

export { isLoading, timelines };
