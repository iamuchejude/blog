import {
  useState,
  useEffect
} from 'react';
import Article from './Article';

export default () =>{
  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setArticles([
      {
        id: 12345,
        title: 'This is just going to be a simple',
        slug: 'this-is-just',
        tags: [
          'PHP',
          'JavaScript',
          'Random'
        ],
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        createdAt: '20080915T155300',
      },
      {
        id: 54321,
        title: 'This is just going to be a simple',
        slug: 'this-is-just-b',
        tags: [
          'PHP',
          'JavaScript',
          'Random'
        ],
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        createdAt: '20080915T155300',
      },
      {
        id: 34521,
        title: 'This is just going to be a simple',
        slug: 'this-is-just-a',
        tags: [
          'PHP',
          'JavaScript',
          'Random'
        ],
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        createdAt: '20080915T155300',
      },
      {
        id: 22322,
        title: 'This is just going to be a simple',
        slug: 'this-is-just-d',
        tags: [
          'PHP',
          'JavaScript',
          'Random'
        ],
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        createdAt: '20080915T155300',
      },
      {
        id: 78828,
        title: 'This is just going to be a simple',
        slug: 'this-is-just-c',
        tags: [
          'PHP',
          'JavaScript',
          'Random'
        ],
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        createdAt: '20080915T155300',
      },
    ])
  });

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