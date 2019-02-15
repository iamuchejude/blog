import {
  useState,
  useEffect
} from 'react';
import Article from './Article';
import Loading from './Loading';

import allArticles from '../articles';

export default () => {
  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setArticles([ ...allArticles ]);
  });
  
  useEffect(() => {
    setLoading(articles.length > 1 ? false : true);
  });

  if (loading) {
    return (
      <Loading size="lg"/>
    );
  }

  if (error && articles.length < 1 && !loading) {
    return (
      <div>
        Error that occured
      </div>
    )
  }

  return (
    <div id="articles">
      { articles.map(article => (
        <Article key={ article.id } article={ article } />
      ))}

      <style jsx>{`
        #articles {
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
}