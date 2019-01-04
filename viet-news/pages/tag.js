import Head from "next/head";
import TagPage from "../views/Tag";
import React, { PureComponent } from "react";
import { getTagById } from "../services/api/tag";

class Tag extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { tag, categories } = this.props;
    const { name } = tag;
    return (
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content={name} />
        </Head>
        <TagPage tag={tag} categories={categories} />
      </div>
    );
  }
}

Tag.getInitialProps = async function(context) {
  const tagId = context.query.tagId;
  const res = await getTagById(tagId);
  console.log("test tag", res);
  if (res.errors === null) {
    return {
      tag: res.data
    };
  }
  return {
    tag: {}
  };
};

export default Tag;
