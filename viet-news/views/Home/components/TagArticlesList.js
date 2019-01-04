import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TagArticlesList extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <section className="wrap news__tab__category">
        <div className="wrap_dark">
          <div className="container">
            <ul className="ncats-tabs">
              <li className="active">
                <a
                  data-target="#people"
                  data-toggle="tab"
                  aria-expanded="false"
                >
                  People
                </a>
              </li>
              <li>
                <a data-target="#sports" data-toggle="tab" aria-expanded="true">
                  Sports
                </a>
              </li>
              <li>
                <a
                  data-target="#travel"
                  data-toggle="tab"
                  aria-expanded="false"
                >
                  Travel
                </a>
              </li>
              <li>
                <a data-target="#food" data-toggle="tab" aria-expanded="false">
                  Food
                </a>
              </li>
              <li>
                <a data-target="#topposts" data-toggle="tab">
                  Top posts
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container container__no-padding">
          <div className="cate-tab-content theme-padding">
            <div className="tab-content">
              <div className="tab-pane fade active in" id="people">
                <div className="row slider-post">
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              People
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:30
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />40
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.4k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              People
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 12:23
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />28
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />8.6k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              People
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 12:54
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />34
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              People
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 12:30
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />20
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sports">
                <div className="row slider-post">
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Sports
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 15:35
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />40
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />5.4k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Sports
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 10:43
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />20
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />8.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Sports
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 17:22
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />14
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />4.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Sports
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 18:30
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />20
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />8.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="travel">
                <div className="row slider-post">
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Travel
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:35
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />22
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.4k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Travel
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:43
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />9
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />9.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Travel
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 18:12
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />8
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />4.4k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Travel
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:10
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />110
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />6.6k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="food">
                <div className="row slider-post">
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Food
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 09:41
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />12
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.6k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Food
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 17:22
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />7
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.7k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Food
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:13
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />8
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />3.4k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Food
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:14
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />22
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />4.3k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="topposts">
                <div className="row slider-post">
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Top Posts
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:45
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />92
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />9.4k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Top Posts
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 17:23
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />91
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />1.1k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Top Posts
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:12
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />80
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />4.6k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="post style-1">
                      <div className="news__tab__categorys">
                        <div className="news__tab__category__slide">
                          <img src="http://placehold.it/360x240" alt="" />
                          <div className="news__tab__category__box">
                            <h5 className="news__tab__category_name yel_line">
                              Top Posts
                            </h5>
                            <a
                              href="news.html"
                              className="news__tab__category__link"
                            >
                              Lorem ipsum dolor sit amet
                            </a>
                            <div className="news__tab__category__posted">
                              <span className="news__tab__category__posted__date">
                                <i className="icon-clock-1" /> today, 11:10
                              </span>
                              <ul className="news__tab__category__posted__icon">
                                <li>
                                  <span>
                                    <i className="icon-comment-empty" />20
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="icon-eye" />4.6k
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TagArticlesList;
