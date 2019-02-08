import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <div id="wrapper">
    <Header />

    <main>
      { children }
    </main>

    <Footer />

    <style global jsx>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
      }

      a {
        text-decoration: none;
        color: rgb(32, 33, 38);
        font-weight: 500;
      }
      
      #wrapper {
        margin: auto;
      }

      .clear::after {
        content: '';
        display: block;
        clear: both;
      }

      .left {
        float: left;
      }

      .right {
        float: right;
      }

      main {
        margin-top: 60px;
        padding: 10px;
      }
    `}</style>
  </div>
);
