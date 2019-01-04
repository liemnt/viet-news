const rootPath = ["home", "timelines"];

const isLoading = state => state.getIn(rootPath.concat(["isLoading"]));
const timelines = state => state.getIn(rootPath.concat(["timelines"]));

export { isLoading, timelines };
