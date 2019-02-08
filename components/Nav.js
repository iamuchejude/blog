import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/bookmarked">
          Bookmarked
        </Link>
      </li>
      <li>
        <Link href="/newsletter">
          Newsletter
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