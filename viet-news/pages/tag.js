import Head from "next/head";
import TagPage from "../views/Tag";
import React, { PureComponent } from "react";
import { getTagById } from "../services/api/tag";
import { withRouter } from "next/router";
import { DOMAIN } from "../config";

class Tag extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { tag, categories, router } = this.props;
    const { name } = tag;
    return (
      <div>
        <Head>
          <title>{name}</title>
          <meta name="description" content={name} />
          <meta property="og:url" content={`${DOMAIN}/${router.asPath}`} />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={name} />
        </Head>
        <TagPage tag={tag} categories={categories} />
      </div>
    );
  }
}

Tag.getInitialProps = async function(context) {
  const tagId = context.query.tagId;
  const res = await getTagById(tagId);
  if (res.errors === null) {
    return {
      tag: res.data
    };
  }
  return {
    tag: {}
  };
};

export default withRouter(Tag);
