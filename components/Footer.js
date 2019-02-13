import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

export default () => (
  <footer className="clear">
    <div className="left">
      <nav>
        <ul>
          <li>
            <a href="https://twitter.com/iamuchejude" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/iamuchejude" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/iamuchejude" target="_blank">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="mailto: iamuchejude@gmail.com" target="_blank">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="right">
      <p>
        With love from <a href="https://iamuchejude.com" target="_blank">Uche Jude</a>
      </p>
    </div>

    <style jsx>{`
      footer {
        text-align: center;
        padding: 20px 25px 15px;
        border-top: 1px solid rgba(0, 0, 0, 0.02);
        margin-top: 20px;
        min-height: 70px;
      }
      
      footer > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      nav ul {
        list-style: none;
      }

      nav ul li {
        float: left;
        padding: 0 10px;
      }

      nav ul li:not(:last-child) a {
        font-size: 1.5em;
      }

      nav ul li:first-child {
        padding: 0;
      }
    `}</style>
  </footer>
);
