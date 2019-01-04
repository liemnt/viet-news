import React from "react";
import Post from "./components/Post";

const Postpage = ({ article, categories }) => {
  return <Post article={article} categories={categories} />;
};

export default Postpage;
