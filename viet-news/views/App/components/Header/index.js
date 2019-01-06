import React, { PureComponent } from "react";
import HeaderItem from "./HeaderItem";
import SearchButton from "../../containers/Header/SearchButton";
import SearchInput from "../../containers/Header/SearchInput";
import PropTypes from "prop-types";
import Link from "next/link";
import _ from "lodash";
import classNames from "classnames";
class Header extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired,
    category: PropTypes.object,
    article: PropTypes.object
  };

  state = {
    isActive: true,
    isFixed: false,
    isOpen: false
  };

  hideMenu = [15, 16, 14, 13];

  // tempScrollTop = 0;

  // headerScroll = () => {
  //   const currentScrollTop = document.documentElement.scrollTop;
  //   if (this.tempScrollTop < currentScrollTop) {
  //     this.setState({
  //       isActive: false
  //     });
  //     this.tempScrollTop = currentScrollTop;
  //   } else if (this.tempScrollTop > currentScrollTop) {
  //     this.setState({
  //       isActive: true
  //     });
  //     this.tempScrollTop = currentScrollTop;
  //   }
  // };

  // addFidexClassForHeader = () => {
  //   var documentScroll = $(document).scrollTop(),
  //     headerHeight = $(".header").innerHeight() + 50;
  //   if (documentScroll > headerHeight) {
  //     $(".header_down").addClass("fixed");
  //   } else {
  //     $(".header_down").removeClass("fixed");
  //   }
  // };
  //
  // componentDidMount() {
  //   window.on("scroll", this.headerScroll);
  // }

  toggleMenu = () => {
    this.setState(state => {
      return { isOpen: !state.isOpen };
    });
  };

  render() {
    const { isOpen } = this.state;
    const { categories, category, article } = this.props;
    const filteredCategories = categories.filter(
      c => !_.includes(this.hideMenu, c.id)
    );
    return (
      <header id="header" className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <Link href="/">
                  <a href="javascript:0" className="wrap-logo">
                    VIET NEWS
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames("wsmenucontent", "overlapblackbg", {
            menuopen: isOpen,
            menuclose: !isOpen
          })}
        />
        <div className="wsmenuexpandermain slideRight">
          <a
            onClick={this.toggleMenu}
            id="navToggle"
            className={classNames("animated-arrow", "slideLeft", {
              menuopen: isOpen,
              menuclose: !isOpen
            })}
          >
            <span />
          </a>
        </div>
        <div className="header_down-wr">
          <div className="header_down">
            <div className="wrapper clearfix bigmegamenu">
              <nav
                className={classNames("wsmenu", "slideLeft", "clearfix", {
                  menuopen: isOpen,
                  menuclose: !isOpen
                })}
              >
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
                  {filteredCategories.map(data => {
                    return (
                      <HeaderItem
                        key={data.id}
                        isActive={
                          _.get(category, "id") === data.id ||
                          _.get(article, "category_id") === data.id
                        }
                        data={data}
                      />
                    );
                  })}
                  {/*<SearchButton />*/}
                </ul>
              </nav>
            </div>
            {/*<SearchInput />*/}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
