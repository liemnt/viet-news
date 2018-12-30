import React, { PureComponent } from "react";
import HeaderItem from "./HeaderItem";
import SearchButton from "../../containers/Header/SearchButton";
import SearchInput from "../../containers/Header/SearchInput";
import PropTypes from "prop-types";

class Header extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired
  };

  render() {
    const { categories } = this.props;
    return (
      <header id="header" className="header">
        {/*<div className="preloader">*/}
        {/*<div className="status">*/}
        {/*<div className="status-block"></div>*/}
        {/*</div>*/}
        {/*</div>*/}
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="wrap-logo">
                  <a href="/" className="logo" />
                </div>
              </div>
              <div className="col-lg-7 col-lg-offset-2 col-sm-offset-1 col-md-offset-1 col-sm-8 col-md-8 hidden-sm hidden-xs">
                <div className="col-xs-4 col-sm-4">
                  <div className="clock">
                    <div id="date" />
                    <div className="all-time">
                      <span id="time" />
                    </div>
                  </div>
                </div>
                <div className="col-xs-4 col-sm-4">
                  <div className="weather">
                    <div className="weather__temperature">
                      <i className="icon-sun" />
                      <div className="active weather__temperature__number">
                        <span>+8</span> &deg;C
                      </div>
                    </div>
                    <div className="weather__city">
                      <em>London</em>
                      <div className="weather__city__list">
                        <ul>
                          <li className="active">
                            <a href="#" data-t="+8">
                              London
                            </a>
                          </li>
                          <li>
                            <a href="#" data-t="+5">
                              Moscow
                            </a>
                          </li>
                          <li>
                            <a href="#" data-t="-3">
                              Kiev
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-4 col-sm-4">
                  <div className="exchange">
                    <div className="exchange__name">Central Bank Rate</div>
                    <div className="exchange__course">
                      <span className="exchange__course__dollar">$ 32.32</span>
                      <span className="exchange__course__euro">
                        &#8364; 28.23
                      </span>
                      <div className="exchange__bank__list">
                        <ul>
                          <li className="active">
                            <a href="#" data-d="$ 32.32" data-e="&#8364; 28.23">
                              Central Bank Rate
                            </a>
                          </li>
                          <li>
                            <a href="#" data-d="$ 33.99" data-e="&#8364; 27.12">
                              Interbank Rates
                            </a>
                          </li>
                          <li>
                            <a href="#" data-d="$ 31.14" data-e="&#8364; 29.55">
                              Foreign Exchange Rates
                            </a>
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
        <div className="wsmenucontent overlapblackbg" />
        <div className="wsmenuexpandermain slideRight">
          <a id="navToggle" className="animated-arrow slideLeft">
            <span />
          </a>
        </div>
        <div className="header_down-wr">
          <div className="header_down">
            <div className="container">
              <div className="wrapper clearfix bigmegamenu">
                <nav className="wsmenu slideLeft clearfix">
                  <ul className="mobile-sub wsmenu-list">
                    <li className="visible-sm visible-xs">
                      <form className="navbar-form mob_search" role="search">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                        </div>
                        <button type="submit" className="btn btn-search">
                          <i className="icon-search" />
                        </button>
                      </form>
                    </li>
                    {categories.map(data => {
                      return <HeaderItem data={data} />;
                    })}
                    <SearchButton/>
                    <li>
                      <div className="weather visible-xs visible-sm ">
                        <div className="weather__temperature">
                          <i className="icon-sun" />
                          <div className="active weather__temperature__number">
                            <span>+8</span> &deg;C
                          </div>
                        </div>
                        <div className="weather__city">
                          <em>London</em>
                          <div className="weather__city__list">
                            <ul>
                              <li className="active">
                                <a href="#" data-t="+8">
                                  London
                                </a>
                              </li>
                              <li>
                                <a href="#" data-t="+5">
                                  Moscow
                                </a>
                              </li>
                              <li>
                                <a href="#" data-t="-3">
                                  Kiev
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="exchange visible-xs visible-sm">
                        <div className="exchange__name">Central Bank Rate</div>
                        <div className="exchange__course">
                          <span className="exchange__course__dollar">
                            $ 32.32
                          </span>
                          <span className="exchange__course__euro">
                            &#8364; 28.23
                          </span>
                          <div className="exchange__bank__list">
                            <ul>
                              <li className="active">
                                <a
                                  href="#"
                                  data-d="$ 32.32"
                                  data-e="&#8364; 28.23"
                                >
                                  Central Bank Rate
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-d="$ 33.99"
                                  data-e="&#8364; 27.12"
                                >
                                  Interbank Rates
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-d="$ 31.14"
                                  data-e="&#8364; 29.55"
                                >
                                  Foreign Exchange Rates
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <SearchInput/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
