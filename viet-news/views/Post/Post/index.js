import React from "react";
import Content from "./Content";
import Cover from "./Cover";
import HeroPhoto from "./HeroPhoto";
import Detail from "./Detail";
import DetailWrapper from "./DetailWrapper";
import Category from "./Category";
import moment from "moment";
import Title from "./Title";
import Abstract from "./Abstract";
import Readmore from "./Readmore";
import Byline from "./Byline";
import Body from "./Body";
import Copy from "./Copy";
import Sidebar from "./Sidebar";
import SidebarItem from "./SidebarItem";

const Post = ({ article }) => {
  return (
    <Content>
      <Cover>
        <HeroPhoto
          style={{
            background: `url(${
              article.thumbnail
            }) no-repeat center center fixed`,
            backgroundSize: "contain"
          }}
        />
        <Detail>
          <DetailWrapper>
            <Category>
              <a>{moment(article.published_at).format("DD-MM-YYYY")}</a>
            </Category>
            <Title>{article.title}</Title>
            {/*<Abstract>*/}
            {/*Tämä on ingressi. Lorem ipsum dolor sit amet, consectetur*/}
            {/*adipisicing elit. Ea veniam aperiam, molestiae earum cumque ad*/}
            {/*maiores facilis. Fuga ab odio, reiciendis obcaecati dolor,*/}
            {/*accusantium eos similique quis quasi officia, ipsum.*/}
            {/*</Abstract>*/}
            <Byline>
              Từ: <strong>{article.crawled_site_name}</strong>
            </Byline>
            {/*<Readmore>*/}
            {/*<a href="#article-body">*/}
            {/*{article.author}*/}
            {/*<i className="fa fa-angle-double-down fa-2x" />*/}
            {/*</a>*/}
            {/*</Readmore>*/}
          </DetailWrapper>
        </Detail>
      </Cover>
      <Body>
        <Copy dangerouslySetInnerHTML={{ __html: article.article_body }} />
      </Body>
    </Content>
  );
};

export default Post;
