import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

class HeaderItem extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      slug: PropTypes.string
    }).isRequired,
    isActive: PropTypes.bool
  };

  render() {
    const { name, slug, id } = this.props.data;
    const { isActive } = this.props;
    return (
      <li className={classNames({ active: isActive })}>
        <span className="wsmenu-click" />
        <Link as={`/categories/${slug}`} href={`/category?id=${id}`}>
          {name}
        </Link>
      </li>
    );
  }
}

export default HeaderItem;
