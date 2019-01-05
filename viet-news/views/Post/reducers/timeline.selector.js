const rootPath = ["news", "timeline"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));

const timeline = state => state.getIn(rootPath.concat(["data"]));

export { isLoading, timeline };
