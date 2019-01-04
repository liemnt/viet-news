import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTags } from "../actions/tags";
import { selectTags } from "../reducers/tags.selector";
import TagList from "../components/TagList";

class TagListContainer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tagsListId: PropTypes.array.isRequired
  };

  componentWillMount() {
    const { tagsListId, getTags } = this.props;
    getTags(tagsListId);
  }

  render() {
    const { tagsList } = this.props;
    return <TagList tagList={tagsList.toJS()} />;
  }
}

const mapDispatchToProps = {
  getTags
};

const mapStateToProps = state => ({
  tagsList: selectTags(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagListContainer);
