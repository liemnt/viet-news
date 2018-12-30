import React from "react";
import Content from "./styledComponent/Content";
import Columns from "./styledComponent/Columns";
import Column from "./styledComponent/Column";
import Article from "./components/Article";
import Card from "./components/Card";
import { Row, Col } from "antd";

const Home = ({ timelines }) => {
  return (
    <Content>
      {/*<Columns>*/}
      {/*<Column>*/}
      <Col span={20} offset={2}>
        <Row>
          {/*<Article />*/}
          {timelines.map(data => {
            return (
              <Col span={6}>
                <Card data={data} />
              </Col>
            );
          })}
        </Row>
      </Col>

      {/*</Column>*/}
      {/*</Columns>*/}
    </Content>
  );
};

export default Home;
