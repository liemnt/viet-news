import RightSideBar from "../containers/RightSideBar";
import TimeAgo from "../../App/components/TimeAgo/index";
import Category from "../../App/components/Category/index";
import Link from "next/link";
import TagList from "../containers/TagList";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";

class Post extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    article: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  };

  state = {
    path: this.props.router.asPath
  };

  componentDidMount() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.2";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    this.props.router.events.on("routeChangeComplete", url => {
      this.setState({
        path: url
      });
      window.FB.XFBML.parse();
    });
  }

  render() {
    const { article, categories } = this.props;
    const {
      thumbnail,
      title,
      backstory,
      article_body,
      published_at,
      category_id,
      tags,
      timeline_id
    } = article;
    return (
      <div className="wrapper">
        <article className="container articles">
          <div className="row">
            <RightSideBar currentArticle={article} timelineId={timeline_id} />
            <div className="col-sm-12 col-md-9 p0 wrap-headline">
              <img
                src={thumbnail || "http://placehold.it/726x252"}
                alt="img"
                className="wrap-headline__img"
              />
              <div className="headline clearfix">
                <div className="headline__data">
                  <Link href={`/category/${category_id}`}>
                    <a
                      href="javascript:0"
                      className="headline__category headline__category_orange"
                    >
                      <Category
                        categories={categories}
                        categoryId={category_id}
                      />
                    </a>
                  </Link>

                  <p className="headline__category">
                    <i className="icon-clock-1" />
                    <TimeAgo date={published_at} />
                  </p>
                </div>
                <div className="share">
                  <ul className="share__list">
                    <div
                      className="fb-share-button"
                        data-href={"http://a.com/" + this.state.path}
                      data-layout="button_count"
                      data-size="small"
                      data-mobile-iframe="true"
                    >
                      <a
                        target="_blank"
                        href={"http://a.com/" + this.state.path}
                        className="fb-xfbml-parse-ignore"
                      >
                        Chia sẻ
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-9 article_text">
              <div className="current">
                <h1 className="text-center yel_line current__title">{title}</h1>
                <p className="current__text">{backstory}</p>
                <div className="current__text">
                  <div dangerouslySetInnerHTML={{ __html: article_body }} />
                </div>
              </div>
            </div>

            <TagList tagsListId={tags} />

            <div className="col-sm-9 col-md-8 col-lg-6 comments">
              <p className="comments__title">Comments</p>
              <div
                className="fb-comments"
                data-href={"http://localhost:3000/" + this.state.path}
                data-numposts="5"
              />
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default withRouter(Post);
