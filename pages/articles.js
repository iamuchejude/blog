import {
  useState,
  useEffect
 } from 'react';
import Layout from "../components/Layout";

import ArticleHeader from "../components/ArticleHeader";
import ArticleBody from "../components/ArticleBody";
export default ({ url }) => {
  const [ article, setArticle ] = useState({});
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setArticle({
      title: 'This is just going to be a simple title',
    });
  });

  return (
    <Layout>
      <ArticleHeader article={ article } />
      <ArticleBody article={ article } />
    </Layout>
  )
}