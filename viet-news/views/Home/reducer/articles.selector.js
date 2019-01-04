const rootPath = ["home", "articlesListByTimeline"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));

const articlesByTimeline = state =>
  state.getIn(rootPath.concat(["articlesByTimeline"]));

export { isLoading, articlesByTimeline };
