import Post from "../views/Post";
import Head from "next/head";
import { getArticleBySlug } from "../services/api/article";
import { getTagsList } from "../services/api/tag";
import { withRouter } from "next/router";
import { DOMAIN } from "../config";

const NewsPage = ({ article, categories, tags, router }) => (
  <div>
    <Head>
      <meta name="description" content={article.backstory} />
      <title>{article.title}</title>
      <meta content={tags.map(item => item.name).join(" , ")} name="keywords" />

      <meta property="og:url" content={`${DOMAIN}/${router.asPath}`} />
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
    const tags = await getTagsList(res.data.tags);
    if (tags.errors === null) {
      return {
        article: res.data,
        tags: tags.data
      };
    }
  }
  return { article: {}, tags: [] };
};

export default withRouter(NewsPage);
