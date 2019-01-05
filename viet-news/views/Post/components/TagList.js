import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";
class TagList extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tagList: PropTypes.array.isRequired
  };

  render() {
    const { tagList } = this.props;
    return (
      <div className="col-sm-12 col-md-9 tags">
        <p>Tags:</p>
        <ul>
          {tagList.map(tag => {
            return <Tag key={tag.id} tag={tag} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TagList;
