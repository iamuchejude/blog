import {
  useState,
  useEffect
 } from 'react';
import Layout from "../components/Layout";
import Loading from '../components/Loading';

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

  useEffect(() => void setLoading(false));

  return (
    <Layout>
      { loading ? (
        <Loading />
      ) : (
        <>
          <ArticleHeader article={ article } />
          <ArticleBody article={ article } />
        </>
      )}
    </Layout>
  )
}