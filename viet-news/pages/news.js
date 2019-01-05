import Post from "../views/Post";
import Head from "next/head";
import { getArticleBySlug } from "../services/api/article";

const NewsPage = ({ article, categories }) => (
  <div>
    <Head>
      <meta name="description" content={article.backstory} />
      <title>{article.title}</title>

      {/*<meta property="og:url"           content="https://www.your-domain.com/your-page.html" />*/}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={article.title} />
      <meta property="og:description" content={article.backstory} />
      <meta property="og:image" content={article.thumbnail} />
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
