import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

class Tag extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired
  };

  render() {
    const { name, id } = this.props.tag;
    return (
      <Link href={`/tag?tagId=${id}`} as={`/tag/${id}`}>
        <li>
          <a href="javascript:0" title="World" className="font">
            {name}
          </a>
        </li>
      </Link>
    );
  }
}

export default Tag;
