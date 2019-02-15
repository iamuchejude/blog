import Link from 'next/link';

import {
  generateSnippet,
  sluggify,
  prettifyTime,
  Tag
} from '../utils/helpers';

export default ({ article }) => (
  <div className="article">
    <h4 className="title">
      <Link href={ `/articles?id=${article.id}` }>
      {/* <Link as={ `/articles/${sluggify(article.title)}` } href={ `/articles?id=${article.id}` }> */}
        <a>{article.title}</a>
      </Link>
    </h4>
    <div className="info">
      Posted in <a>Javascript</a> on <span>5th of March, 2019</span>.
    </div>
    <p className="snippet">
      { generateSnippet(article.content) }
    </p>

    <style jsx>{`
      .article:not(:first-child):not(:last-child) {
        margin: 40px 0;
      }

      .article .title {
        font-size: 1.4em;
        margin: 0; 
        font-weight: 700;
      }

      .article .info {
        font-size: .9em;
        font-weight: 100;
        margin: 8px 0;
        text-decoration: italize;
      }

      .article .info a,
      .article .info span {
        font-weight: 300;
      }
      
      .article .info a:hover {
        cursor: pointer;
      }

      .article .title a {
        font-weight: 500;
      }

      .article .title a:hover {
        font-weight: 700;
        transition: .5s ease-in-out;
      }

      .article .snippet {
        font-weight: 300;
        line-height: 1.7em;
      }
    `}</style>
  </div>
);
