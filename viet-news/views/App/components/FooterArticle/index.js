import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

class Index extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { title, thumbnail, slug } = this.props.article;
    return (
      <Link href={`/news?slug=${slug}`} as={`/news/${slug}`}>
        <li>
          <a href="javascript:0" className="item">
            <div className="item-image">
              <span className="img-link">
                <img
                  className="img-responsive img-full"
                  src={thumbnail || "http://placehold.it/370x185"}
                  alt=""
                />
              </span>
            </div>
            <div className="item-content">
              <p className="ellipsis">
                <span>{title}</span>
              </p>
            </div>
          </a>
        </li>
      </Link>
    );
  }
}

export default Index;
