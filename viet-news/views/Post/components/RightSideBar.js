import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Affix } from "react-overlays";
import Article from "./Article";
import TitleRightBar from "../containers/TitleRightBar";
import LoadMore from "../containers/LoadMore";
import PreventParentScroll from "prevent-parent-scroll";

class RightSideBar extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    articles: PropTypes.array.isRequired,
    currentArticle: PropTypes.object.isRequired
  };

  componentDidMount() {
    let scrollEl = this.right;
    let preventParentScroll = new PreventParentScroll(scrollEl);
    preventParentScroll.start();
  }

  render() {
    const {
      articles,
      currentArticle: { id, timeline_id, category_id },
      currentArticle
    } = this.props;
    return (
      <Affix>
        <div
          ref={r => (this.right = r)}
          style={{ overflowY: "scroll" }}
          id="style-8"
          className="col-sm-4 col-md-3 right_sidebar hidden-xs hidden-sm"
        >
          <div className="news-tabs">
            <TitleRightBar className="orange" currentArticle={currentArticle} />
            <ul
              className="news-tabs__nav nav nav-tabs shadow_text"
              role="tablist"
            >
              {articles.map(article => {
                return (
                  <Article
                    key={article.id}
                    isActive={id === article.id}
                    article={article}
                  />
                );
              })}
            </ul>
            <div style={{ paddingBottom: 20 }}>
              <LoadMore categoryId={category_id} timelineId={timeline_id} />
            </div>
          </div>
        </div>
      </Affix>
    );
  }
}

export default RightSideBar;
