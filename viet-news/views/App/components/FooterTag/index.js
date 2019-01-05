import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

class FooterTag extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tag: PropTypes.object.isRequired
  };

  render() {
    const { id, name } = this.props.tag;
    return (
      <Link href={`/tag?tagId=${id}`} as={`tag/${id}`}>
        <a href="javascript:0" title="">
          {name}
        </a>
      </Link>
    );
  }
}

export default FooterTag;
