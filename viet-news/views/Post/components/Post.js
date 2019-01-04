import React from "react";
import RightSideBar from "./RightSideBar";
import TimeAgo from "../../App/components/TimeAgo/index";
import Category from "../../App/components/Category/index";
import Link from "next/link";
import TagList from "../containers/TagList";

const Post = ({ article, categories }) => {
  const {
    thumbnail,
    title,
    backstory,
    article_body,
    published_at,
    category_id,
    tags
  } = article;
  console.log("test tags", tags);
  return <div className="wrapper">
      <article className="container articles">
        <div className="row">
          <RightSideBar />
          <div className="col-sm-12 col-md-9 p0 wrap-headline">
            <img src={thumbnail || "http://placehold.it/726x252"} alt="img" className="wrap-headline__img" />
            <div className="headline clearfix">
              <div className="headline__data">
                <Link href={`/category/${category_id}`}>
                  <a href="javascript:0" className="headline__category headline__category_orange">
                    <Category categories={categories} categoryId={category_id} />
                  </a>
                </Link>

                <p className="headline__category">
                  <i className="icon-clock-1" />
                  <TimeAgo date={published_at} />
                </p>
              </div>
              <div className="share">
                <ul className="share__list">
                  <li className="share__row">
                    <a className="share__link share__link_bg-facebook" href="#">
                      <i className="bg bg_facebook">&ensp;</i>
                    </a>
                    <span className="share__number">13</span>
                  </li>
                  <li className="share__row">
                    <a className="share__link share__link_bg-twitter" href="#">
                      <i className="bg bg_twitter">&ensp;</i>
                    </a>
                    <span className="share__number">26</span>
                  </li>
                  <li className="share__row">
                    <a className="share__link share__link_bg-google" href="#">
                      <i className="bg bg_google">&ensp;</i>
                    </a>
                    <span className="share__number">17</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 article_text">
            <div className="current">
              <h1 className="text-center yel_line current__title">{title}</h1>
              <p className="current__text">{backstory}</p>
              {/*<img*/}
              {/*src={thumbnail || "http://placehold.it/625x258"}*/}
              {/*alt="img"*/}
              {/*className="current__img"*/}
              {/*/>*/}
              <div className="current__text">
                <div dangerouslySetInnerHTML={{ __html: article_body }} />
              </div>
              {/*<p className="current__text">*/}
              {/*Sed ut perspiciatis unde omnis iste natus error sit voluptatem*/}
              {/*accusantium doloremque laudantium, totam rem aperiam, eaque ipsa*/}
              {/*quae ab illo inventore veritatis et quasi architecto beatae*/}
              {/*vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia*/}
              {/*voluptas sit aspernatur aut odit aut fugit, sed quia*/}
              {/*consequuntur magni dolores eos qui ratione voluptatem sequi*/}
              {/*nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor*/}
              {/*sit amet, consectetur, adipisci velit, sed quia non numquam eius*/}
              {/*modi tempora incidunt ut labore et dolore magnam aliquam quaerat*/}
              {/*voluptatem. Ut enim ad minima veniam, quis nostrum*/}
              {/*exercitationem ullam corporis suscipit laboriosam, nisi ut*/}
              {/*aliquid ex ea commodi consequatur? Quis autem vel eum iure*/}
              {/*reprehenderit qui in ea voluptate velit esse quam nihil*/}
              {/*molestiae consequatur, vel illum qui dolorem eum fugiat quo*/}
              {/*voluptas nulla pariatur?*/}
              {/*</p>*/}
              {/*<blockquote className="quote current__quote">*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
              {/*eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
              {/*</blockquote>*/}
              {/*<p className="current__text">*/}
              {/*Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
              {/*cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat*/}
              {/*cupidatat non proident, sunt in culpa qui officia deserunt*/}
              {/*mollit anim id est laborum.*/}
              {/*</p>*/}
            </div>
          </div>

          <TagList tagsListId={tags} />

          <div className="col-sm-9 col-md-8 col-lg-6 comments">
            <p className="comments__title">Comments</p>
            <div className="comments__media">
              <div className="media-middle">
                <i className="media-object" style={{ backgroundImage: 'url("http://placehold.it/50x50")' }} />
                <div className="comm_info">
                  <h4 className="media-heading">Maria</h4>
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                </div>
              </div>
              <p className="media-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="comments__media">
              <div className="media-middle">
                <i className="media-object" style={{ backgroundImage: 'url("http://placehold.it/50x50")' }} />
                <div className="comm_info">
                  <h4 className="media-heading">Maria</h4>
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                </div>
              </div>
              <p className="media-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="comments__media">
              <div className="media-middle">
                <i className="media-object" style={{ backgroundImage: 'url("http://placehold.it/50x50")' }} />
                <div className="comm_info">
                  <h4 className="media-heading">Maria</h4>
                  <span className="time">
                    <i className="icon-clock-1" /> today, 12:30
                  </span>
                </div>
              </div>
              <p className="media-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="comments__form">
              <form action="#" method="POST">
                <div className="form-group">
                  <input type="text" style={{ width: 200 }} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <textarea name="text" id="input" rows="7" required="required" placeholder="Comments" />
                </div>
                <button type="submit" className="btn btn-comment">
                  <i className="icon-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>

      {/*<div className="wrap wrap_gray">*/}
      {/*<section className="container articles wrap wrap_gray">*/}
      {/*<div className="col-sm-12 col-md-9 article_text">*/}
      {/*<div className="projects__title">*/}
      {/*<h2 className="block-title__h2">Latest content</h2>*/}
      {/*</div>*/}
      {/*<div className="popular__content__newspage autoplay">*/}
      {/*<div className="popular__content__slide">*/}
      {/*<img src="http://placehold.it/360x240" alt="" />*/}
      {/*<div className="popular__content__box">*/}
      {/*<h5 className="popular__content__category yel_line">*/}
      {/*Bussiness*/}
      {/*</h5>*/}
      {/*<a href="news.html" className="popular__content__link">*/}
      {/*Lorem ipsum dolor sit amet*/}
      {/*</a>*/}
      {/*<div className="popular__content__posted">*/}
      {/*<span className="popular__content__posted__date">*/}
      {/*<i className="icon-clock-1" /> today, 12:30*/}
      {/*</span>*/}
      {/*<ul className="popular__content__posted__icon">*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-comment-empty" />*/}
      {/*20*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-eye" />*/}
      {/*9.4k*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="popular__content__slide">*/}
      {/*<img src="http://placehold.it/360x240" alt="" />*/}
      {/*<div className="popular__content__box">*/}
      {/*<h5 className="popular__content__category yel_line">*/}
      {/*Policy*/}
      {/*</h5>*/}
      {/*<a href="news.html" className="popular__content__link">*/}
      {/*Lorem ipsum dolor sit amet*/}
      {/*</a>*/}
      {/*<div className="popular__content__posted">*/}
      {/*<span className="popular__content__posted__date">*/}
      {/*<i className="icon-clock-1" /> today, 18:26*/}
      {/*</span>*/}
      {/*<ul className="popular__content__posted__icon">*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-comment-empty" />*/}
      {/*21*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-eye" />*/}
      {/*1.4k*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="popular__content__slide">*/}
      {/*<img src="http://placehold.it/360x240" alt="" />*/}
      {/*<div className="popular__content__box">*/}
      {/*<h5 className="popular__content__category yel_line">*/}
      {/*People*/}
      {/*</h5>*/}
      {/*<a href="news.html" className="popular__content__link">*/}
      {/*Lorem ipsum dolor sit amet*/}
      {/*</a>*/}
      {/*<div className="popular__content__posted">*/}
      {/*<span className="popular__content__posted__date">*/}
      {/*<i className="icon-clock-1" /> today, 16:36*/}
      {/*</span>*/}
      {/*<ul className="popular__content__posted__icon">*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-comment-empty" />6*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-eye" />*/}
      {/*6.6k*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="popular__content__slide">*/}
      {/*<img src="http://placehold.it/360x240" alt="" />*/}
      {/*<div className="popular__content__box">*/}
      {/*<h5 className="popular__content__category yel_line">*/}
      {/*Angular*/}
      {/*</h5>*/}
      {/*<a href="news.html" className="popular__content__link">*/}
      {/*Lorem ipsum dolor sit amet*/}
      {/*</a>*/}
      {/*<div className="popular__content__posted">*/}
      {/*<span className="popular__content__posted__date">*/}
      {/*<i className="icon-clock-1" /> today, 11:36*/}
      {/*</span>*/}
      {/*<ul className="popular__content__posted__icon">*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-comment-empty" />9*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-eye" />*/}
      {/*2.4k*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*<div className="popular__content__slide">*/}
      {/*<img src="http://placehold.it/360x240" alt="" />*/}
      {/*<div className="popular__content__box">*/}
      {/*<h5 className="popular__content__category yel_line">Tech</h5>*/}
      {/*<a href="news.html" className="popular__content__link">*/}
      {/*Lorem ipsum dolor sit amet*/}
      {/*</a>*/}
      {/*<div className="popular__content__posted">*/}
      {/*<span className="popular__content__posted__date">*/}
      {/*<i className="icon-clock-1" /> today, 11:30*/}
      {/*</span>*/}
      {/*<ul className="popular__content__posted__icon">*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-comment-empty" />*/}
      {/*21*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*<span>*/}
      {/*<i className="icon-eye" />*/}
      {/*4.9k*/}
      {/*</span>*/}
      {/*</li>*/}
      {/*</ul>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</section>*/}
      {/*</div>*/}
    </div>;
};

export default Post;
