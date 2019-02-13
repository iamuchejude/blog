import Link from 'next/link';

import Nav from './Nav';

export default () => (
  <header className="clear">
    <div className="left logo">
      <Link href="/">
        <a>
          <img src='/static/images/logo-dark.png' alt="Uche Jude" />
        </a>
      </Link>
    </div>

    <div className="right">
      <Nav />
    </div>

    <style jsx>{`
      header {
        height: 100px;
        padding: 0 30px;
      }

      header > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-contents: center;
      }
      
      header img {
        width: 40px;
        height: 40px;
      }
    `}</style>
  </header>
);