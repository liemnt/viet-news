import Layout from "../views/App/components/Layout/index.js";
import fetch from "isomorphic-unfetch";
import Post from "../views/Post";
import Head from "next/head";
import { getArticleById, getArticleBySlug } from "../services/api/article";

const Postpage = ({ article }) => (
  <Layout>
    <Head>
      <meta name="description" content={article.backstory} />
      <title>{article.title}</title>
    </Head>
    <Post article={article} />
  </Layout>
);

Postpage.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await getArticleBySlug(slug);
  if (res.errors === null) {
    return {
      article: res.data
    };
  }
  return { article: {} };
};

export default Postpage;
