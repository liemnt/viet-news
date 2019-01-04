const rootPath = ["home", "latestArticles"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));

const latestArticles = state => state.getIn(rootPath.concat(["data"]));

const error = state => state.getIn(rootPath.concat(["error"]));

export { isLoading, latestArticles, error };
