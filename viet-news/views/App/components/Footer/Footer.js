import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import FooterTag from "../FooterTag";
import FooterArticle from "../FooterArticle";

class Footer extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    tags: PropTypes.array.isRequired,
    articles: PropTypes.array.isRequired
  };

  render() {
    const { tags, articles } = this.props;
    console.log("test ar", articles);
    return (
      <footer className="footer slate_gray">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <span className="footer__category yellow-line">About Us</span>
              <p>
                Viet News - Website tổng hợp và phân tích tin tức từ đa dạng các
                nguồn trên Internet
              </p>
              <span className="wrap-logo">VIET NEWS</span>
              <ul className="footer-adress">
                <li>
                  <i className="icon-location" />
                  Trường Đại học Công nghệ thông tin - Đại học Quốc gia Thành
                  phố Hồ Chí Minh
                </li>
                <li>
                  <i className="icon-mobile" />
                  0912 345 678
                </li>
                <li>
                  <i className="icon-mail" />
                  info@vietnews.com
                </li>
                <li>
                  <i className="icon-skype" />
                  <a href="skype:exsy-info" title="">
                    viet-news
                  </a>
                </li>
                <li>
                  <i className="icon-globe" />
                  <a href="http://exsythemes.com" title="">
                    www.vietnews.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 footer-post">
              <span className="footer__category yellow-line">Latest News</span>
              <ul>
                {articles.slice(0, 5).map(article => {
                  return <FooterArticle key={article.id} article={article} />;
                })}
              </ul>
            </div>
            <div className="col-md-3">
              <span className="footer__category yellow-line">Tags</span>
              <div className="tagcloud">
                {tags.map(tag => {
                  return <FooterTag key={tag.id} tag={tag} />;
                })}
              </div>
              <div className="newsletter-form">
                <span className="footer__category yellow-line">Newsletter</span>
                <form>
                  <div className="input-group m-0">
                    <span className="input-group-addon">
                      <i className="icon-mail" />
                    </span>
                    <input
                      type="text"
                      className="form-control newsletter-input"
                      placeholder="Your Email"
                      required
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-icon">
                        <i className="icon-paper-plane" />
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
