const rootPath = ["home", "categoryArticles"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));

const selectCategoriesArticles = state =>
  state.getIn(rootPath.concat(["data"]));

const error = state =>
  state.getIn(rootPath.concat(["error"]));

export { isLoading, selectCategoriesArticles, error };
