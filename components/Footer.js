export default () => (
  <footer className="clear">
    <div className="left">
      <nav>
        <ul>
          <li>
            <a href="https://twitter.com/iamuchejude" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/iamuchejude" target="_blank">
              GitHub
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
        width: 100vw;
        text-align: center;
        padding: 20px 50px;
        border-top: 1px solid rgba(0, 0, 0, 0.02);
      }
      
      footer > div {
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

      nav ul li:first-child {
        padding: 0;
      }
    `}</style>
  </footer>
);
