import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Timeline extends PureComponent {
  static defaultProps = {};

  static propTypes = {
    categories: PropTypes.array.isRequired,
    timeline: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="wrapper wrap_dark">
        <article className="container articles">
          <div className="row">
            <div
              style={{ position: "initial" }}
              className="col-sm-4 right_sidebar col-md-3 hidden-xs hidden-sm"
              data-spy="affix"
              data-offset-top="112"
              data-offset-bottom="80"
            >
              <div className="news-tabs">
                <p className="news-tabs__title h2">News feed</p>
                <ul
                  className="news-tabs__nav nav nav-tabs shadow_text"
                  role="tablist"
                >
                  <li role="presentation" className="active">
                    <a href="#home" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#profile" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#messages" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#settings" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#home" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#profile" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#messages" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#settings" role="tab" data-toggle="tab">
                      <span className="time">
                        <i className="icon-clock-1" /> today, 12:30
                      </span>
                      Volkswagen hit by multiple probes in US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*<div className="col-sm-12 col-md-9 p0 wrap-headline">*/}
            {/*<img*/}
            {/*src="http://placehold.it/726x252"*/}
            {/*alt="img"*/}
            {/*className="wrap-headline__img"*/}
            {/*/>*/}
            {/*<div className="headline clearfix">*/}
            {/*<div className="headline__data">*/}
            {/*<a*/}
            {/*href="category.html"*/}
            {/*className="headline__category headline__category_orange"*/}
            {/*>*/}
            {/*Policy*/}
            {/*</a>*/}
            {/*<p className="headline__category">*/}
            {/*<i className="icon-clock-1" /> today, 18:48*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*<div className="share">*/}
            {/*<ul className="share__list">*/}
            {/*<li className="share__row">*/}
            {/*<a*/}
            {/*className="share__link share__link_bg-facebook"*/}
            {/*href="#"*/}
            {/*>*/}
            {/*<i className="bg bg_facebook">&ensp;</i>*/}
            {/*</a>*/}
            {/*<span className="share__number">13</span>*/}
            {/*</li>*/}
            {/*<li className="share__row">*/}
            {/*<a*/}
            {/*className="share__link share__link_bg-twitter"*/}
            {/*href="#"*/}
            {/*>*/}
            {/*<i className="bg bg_twitter">&ensp;</i>*/}
            {/*</a>*/}
            {/*<span className="share__number">26</span>*/}
            {/*</li>*/}
            {/*<li className="share__row">*/}
            {/*<a className="share__link share__link_bg-google" href="#">*/}
            {/*<i className="bg bg_google">&ensp;</i>*/}
            {/*</a>*/}
            {/*<span className="share__number">17</span>*/}
            {/*</li>*/}
            {/*</ul>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-sm-12 col-md-9 article_text">*/}
            {/*<div className="current">*/}
            {/*<h1 className="text-center yel_line current__title">*/}
            {/*Insiders Guide to Miami*/}
            {/*</h1>*/}
            {/*<p className="current__text">*/}
            {/*But I must explain to you how all this mistaken idea of*/}
            {/*denouncing pleasure and praising pain was born and I will give*/}
            {/*you a complete account of the system, and expound the actual*/}
            {/*teachings of the great explorer of the truth, the*/}
            {/*master-builder of human happiness. No one rejects, dislikes,*/}
            {/*or avoids pleasure itself, because it is pleasure, but because*/}
            {/*those who do not know how to pursue pleasure rationally*/}
            {/*encounter consequences that are extremely painful. Nor again*/}
            {/*is there anyone who loves or pursues or desires to obtain pain*/}
            {/*of itself, because it is pain, but because occasionally*/}
            {/*circumstances occur in which toil and pain can procure him*/}
            {/*some great pleasure. To take a trivial example, which of us*/}
            {/*ever undertakes laborious physical exercise, except to obtain*/}
            {/*some advantage from it? But who has any right to find fault*/}
            {/*with a man who chooses to enjoy a pleasure that has no*/}
            {/*annoying consequences, or one who avoids a pain that produces*/}
            {/*no resultant pleasure?*/}
            {/*</p>*/}
            {/*<img*/}
            {/*src="http://placehold.it/625x258"*/}
            {/*alt="img"*/}
            {/*className="current__img"*/}
            {/*/>*/}
            {/*<p className="current__text">*/}
            {/*Sed ut perspiciatis unde omnis iste natus error sit voluptatem*/}
            {/*accusantium doloremque laudantium, totam rem aperiam, eaque*/}
            {/*ipsa quae ab illo inventore veritatis et quasi architecto*/}
            {/*beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem*/}
            {/*quia voluptas sit aspernatur aut odit aut fugit, sed quia*/}
            {/*consequuntur magni dolores eos qui ratione voluptatem sequi*/}
            {/*nesciunt. Neque porro quisquam est, qui dolorem ipsum quia*/}
            {/*dolor sit amet, consectetur, adipisci velit, sed quia non*/}
            {/*numquam eius modi tempora incidunt ut labore et dolore magnam*/}
            {/*aliquam quaerat voluptatem. Ut enim ad minima veniam, quis*/}
            {/*nostrum exercitationem ullam corporis suscipit laboriosam,*/}
            {/*nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum*/}
            {/*iure reprehenderit qui in ea voluptate velit esse quam nihil*/}
            {/*molestiae consequatur, vel illum qui dolorem eum fugiat quo*/}
            {/*voluptas nulla pariatur?*/}
            {/*</p>*/}
            {/*<blockquote className="quote current__quote">*/}
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
            {/*</blockquote>*/}
            {/*<p className="current__text">*/}
            {/*Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
            {/*cillum dolore eu fugiat nulla pariatur. Excepteur sint*/}
            {/*occaecat cupidatat non proident, sunt in culpa qui officia*/}
            {/*deserunt mollit anim id est laborum.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-sm-12 col-md-9 tags">*/}
            {/*<p>Tags:</p>*/}
            {/*<ul>*/}
            {/*<li>*/}
            {/*<a href="#" title="World" className="font">*/}
            {/*World*/}
            {/*</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<a className="yellow font" href="#" title="Sport">*/}
            {/*Sport*/}
            {/*</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*<a href="#" title="Cats" className="font">*/}
            {/*Cats*/}
            {/*</a>*/}
            {/*</li>*/}
            {/*</ul>*/}
            {/*</div>*/}
            {/*<div className="col-sm-9 col-md-8 col-lg-6 comments">*/}
            {/*<p className="comments__title">Comments</p>*/}
            {/*<div className="comments__media">*/}
            {/*<div className="media-middle">*/}
            {/*<i*/}
            {/*className="media-object"*/}
            {/*style={{*/}
            {/*backgroundImage: "url('http://placehold.it/50x50')"*/}
            {/*}}*/}
            {/*/>*/}
            {/*<div className="comm_info">*/}
            {/*<h4 className="media-heading">Maria</h4>*/}
            {/*<span className="time">*/}
            {/*<i className="icon-clock-1" /> today, 12:30*/}
            {/*</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<p className="media-body">*/}
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
            {/*Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
            {/*laboris nisi ut aliquip ex ea commodo consequat.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*<div className="comments__media">*/}
            {/*<div className="media-middle">*/}
            {/*<i*/}
            {/*className="media-object"*/}
            {/*style={{*/}
            {/*backgroundImage: "url('http://placehold.it/50x50')"*/}
            {/*}}*/}
            {/*/>*/}
            {/*<div className="comm_info">*/}
            {/*<h4 className="media-heading">Maria</h4>*/}
            {/*<span className="time">*/}
            {/*<i className="icon-clock-1" /> today, 12:30*/}
            {/*</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<p className="media-body">*/}
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
            {/*Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
            {/*laboris nisi ut aliquip ex ea commodo consequat.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*<div className="comments__media">*/}
            {/*<div className="media-middle">*/}
            {/*<i*/}
            {/*className="media-object"*/}
            {/*style={{*/}
            {/*backgroundImage: "url('http://placehold.it/50x50')"*/}
            {/*}}*/}
            {/*/>*/}
            {/*<div className="comm_info">*/}
            {/*<h4 className="media-heading">Maria</h4>*/}
            {/*<span className="time">*/}
            {/*<i className="icon-clock-1" /> today, 12:30*/}
            {/*</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<p className="media-body">*/}
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
            {/*do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
            {/*Ut enim ad minim veniam, quis nostrud exercitation ullamco*/}
            {/*laboris nisi ut aliquip ex ea commodo consequat.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*<div className="comments__form">*/}
            {/*<form action="#" method="POST">*/}
            {/*<div className="form-group">*/}
            {/*<input*/}
            {/*type="text"*/}
            {/*style={{ width: 200 }}*/}
            {/*placeholder="Your name"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*<textarea*/}
            {/*name="text"*/}
            {/*id="input"*/}
            {/*rows="7"*/}
            {/*required="required"*/}
            {/*placeholder="Comments"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*<button type="submit" className="btn btn-comment">*/}
            {/*<i className="icon-paper-plane" />*/}
            {/*</button>*/}
            {/*</form>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </article>
      </div>
    );
  }
}

export default Timeline;
