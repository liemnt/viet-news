const rootPath = ["news", "tags"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));

const selectTags = state => state.getIn(rootPath.concat(["data"]));

const error = state => state.getIn(rootPath.concat(["error"]));

export { isLoading, selectTags, error };
