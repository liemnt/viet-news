import React from "react";
import TimelineBlock from "./TimelineBlock";
import Container from "./Container";

const List = ({ articles }) => {
  return (
    <Container>
      {articles.map(data => {
        return <TimelineBlock data={data} />;
      })}
    </Container>
  );
};

export default List;
