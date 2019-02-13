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
      <Link as={ `/articles/${sluggify(article.title)}` } href={ `/articles?id=${article.id}` }>
        <a>{article.title}</a>
      </Link>
    </h4>
    <div className="info">
      { prettifyTime(article.createdAt) } - Jude, School
    </div>
    <p className="snippet">
      { generateSnippet(article.content) }
    </p>

    <style jsx>{`
      .article:not(:first-child):not(:last-child) {
        margin: 35px 0;
      }

      .article .title {
        font-size: 1.4em;
        margin: 0; 
      }

      .article .info {
        font-size: .9em;
        margin: 8px 0;
      }

      .article .title a {
        font-weight: 500;
      }

      .article .title a:hover {
        color: #191970;
      }

      .article .snippet {
        font-weight: 100;
      }
    `}</style>
  </div>
);
