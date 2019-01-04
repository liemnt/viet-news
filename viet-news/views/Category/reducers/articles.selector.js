const rootPath = ["category", "articlesByCategory"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));

const selectArticlesByCategory = state =>
  state.getIn(rootPath.concat(["data"]));

const error = state => state.getIn(rootPath.concat(["error"]));
const page = state => state.getIn(rootPath.concat(["page"]));
const numPerPage = state => state.getIn(rootPath.concat(["numPerPage"]));
const total = state => state.getIn(rootPath.concat(["total"]));

export { isLoading, selectArticlesByCategory, error, page, numPerPage, total };
