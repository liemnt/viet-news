import { createSelector } from "reselect";

const root = state => state.getIn(["app", "search"]);

const isSearchOpen = () =>
  createSelector(
    root,
    state => state.get("isSearchOpen")
  );

export { isSearchOpen };
