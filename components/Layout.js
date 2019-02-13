import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default ({ title, children }) => (
  <div id="wrapper">
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{ title || 'X' }</title>
      <link rel="shortcut icon" href="/static/images/favicon.ico" />
    </Head>

    <Header />
    <main>
      { children }
    </main>
    <Footer />

    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,200,300,400,500,600,700');

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-weight: 300;
        outline: none;
        color: rgba(0, 0, 0, 0.95);
        font-family: 'IBM Plex Mono', monospace;
      }

      html,
      body {
        background: rgba(250, 250, 250, 0.01);
      }

      a {
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: none;
        transition: .5s ease-in-out;
      }

      p {
        line-height: 1.5em;
      }
      
      #wrapper {
        margin: auto;
        width: 750px;
      }

      @media only screen and (max-width: 750px) {
        #wrapper {
          width: 100vw;
        }
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
        padding: 0 25px;
      }
    `}</style>
  </div>
);
