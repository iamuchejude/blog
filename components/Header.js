import Link from 'next/link';

import Nav from './Nav';

export default () => (
  <header className="clear">
    <div className="left logo">
      <Link href="/">
        <img src='/static/images/logo-dark.png' alt="Uche Jude" />
      </Link>
    </div>

    <div className="right">
      <Nav />
    </div>

    <style jsx>{`
      header {
        height: 60px;
        width: 100vw;
        padding: 0 60px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        position: fixed;
        top: 0;
        left: 0;
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