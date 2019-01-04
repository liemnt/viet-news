import Post from "../views/Post";
import Head from "next/head";
import { getArticleBySlug } from "../services/api/article";

const NewsPage = ({ article, categories }) => (
  <div>
    <Head>
      <meta name="description" content={article.backstory} />
      <title>{article.title}</title>
    </Head>
    <Post categories={categories} article={article} />
  </div>
);

NewsPage.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await getArticleBySlug(slug);
  if (res.errors === null) {
    return {
      article: res.data
    };
  }
  return { article: {} };
};

export default NewsPage;
