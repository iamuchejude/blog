import Link from 'next/link';
import {
  GoHome,
  GoTag,
  GoBook,
} from 'react-icons/go';

export default () => (
  <nav>
    <a
      href="javascript:void(0)"
      id="harmbuger"
    >
      <div></div>
      <div></div>
      <div></div>
    </a>
    <ul>
      <li>
        <Link href="/">
          <a>
            <span><GoHome /></span>
            <span>Home</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/bookmarked">
          <a>
            <span><GoTag /></span>
            <span>Bookmarked</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/newsletter">
          <a>
            <span><GoBook /></span>
            <span>Newsletter</span>
          </a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
      }

      ul li {
        float: left;
        padding: 0 15px;
      }

      ul li:last-child {
        padding-right: 0;
      }

      ul li:first-child {
        padding-left: 0;
      }

      ul li a {
        font-weight: 300;
      }

      ul li a span:last-child {
        display: block;
        font-weight: 300;
      }

      ul li a span:first-child {
        display: none;
        font-size: 1.4em;
        font-weight: 300;
      }

      @media only screen and (max-width: 600px) {
        ul li a span:last-child {
          display: none;
        }

        ul li a span:first-child {
          display: block;
        }
      }
    `}</style>
  </nav>
);