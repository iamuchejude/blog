import Link from 'next/link';

export default () => (
  <nav>
    <a href="javascript:void(0)">
      <div></div>
      <div></div>
      <div></div>
    </a>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/bookmarked">
          <a>Bookmarked</a>
        </Link>
      </li>
      <li>
        <Link href="/newsletter">
          <a>Newsletter</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
      }

      ul li {
        float: left;
        padding: 0 20px;
      }

      ul li:last-child {
        padding-right: 0;
      }

      ul li:first-child {
        padding-left: 0;
      }
    `}</style>
  </nav>
);