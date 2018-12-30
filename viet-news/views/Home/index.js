import React from "react";
import SlideItem from './components/SlideItem';

const Home = ({ timelines }) => {
  return (
    <div className="slate_gray">
      <div className="container">
        <div className="row header_news_panel">
          <div className="col-sm-8 tab-content tab-content_mob-p0">
            <SlideItem data={timelines[0]}/>
          </div>
          <div className="col-sm-4 news-tabs">
            <p className="news-tabs__title h2">Latest news</p>
            <ul
              className="news-tabs__nav nav nav-tabs shadow_text"
              role="tablist"
            >
              <li role="presentation" className="active">
                <a href="#home" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 10:11
                  </span>
                  Volkswagen hit by multiple probes in US Volkswagen hit by
                  multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#profile" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 11:22
                  </span>
                  Volkswagen hit by multiple probes in US Volkswagen hit by
                  multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#messages" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:33
                  </span>
                  Volkswagen hit by multiple probes in US Volkswagen hit by
                  multiple probes in US
                </a>
              </li>
              <li role="presentation">
                <a href="#settings" role="tab" data-toggle="tab">
                  <span className="time">
                    <i className="icon-clock-1" /> today, 14:44
                  </span>
                  Volkswagen hit by multiple probes in US Volkswagen hit by
                  multiple probes in US
                </a>
              </li>
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
              <button className="up" style={{margin: 0}}>
                <i className="icon-left-open" />
              </button>
              <button className="down" style={{margin: 0}}>
                <i className="icon-right-open" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
