import React from "react";
import SlideItem from "./SlideItem";
import SlideTimelineItem from "./SlideTimelineItem";
import moment from "moment";

const Slide = ({ articles, timeline }) => {
  const sortArticles = articles.sort(
    (a, b) => moment(b.published_at) - moment(a.published_at)
  );
  return (
    <div className="slate_gray">
      <div className="container">
        <div className="row header_news_panel">
          <div className="col-sm-8 tab-content tab-content_mob-p0">
            <SlideItem data={sortArticles[0] || {}} />
          </div>
          <div className="col-sm-4 news-tabs">
            <p className="news-tabs__title h2">Latest news</p>
            <ul
              className="news-tabs__nav nav nav-tabs shadow_text"
              role="tablist"
            >
              {sortArticles.slice(0, 4).map(data => {
                return <SlideTimelineItem data={data} />;
              })}
            </ul>
          </div>
        </div>
        <div className="outer">
          <div className="breaking-ribbon">
            <div className="breaking-ribbon__title">
              <i className="icon-flash" /> Breaking News
            </div>
          </div>
          <div className="newsticker">
            <ul>
              <li>
                <span className="category">Sport:</span>{" "}
                <a href="#">
                  Australian Open 2017: Johanna Konta wins but Heather Watson
                  and Kyle Edmund lose2 hours ago
                </a>
              </li>
              <li>
                <span className="category">Travel:</span>{" "}
                <a href="#">
                  The language of 16th-century falconry entered the colloquial
                  thanks in part to one amateur falconer
                </a>
              </li>
              <li>
                <span className="category">Capital:</span>{" "}
                <a href="#">These are the secrets of constant holidaymakers</a>
              </li>
            </ul>
            <div className="navi">
              <button className="up" style={{ margin: 0 }}>
                <i className="icon-left-open" />
              </button>
              <button className="down" style={{ margin: 0 }}>
                <i className="icon-right-open" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
