export default () => (
  <div id="about">
    <div className="clear">
      <div className="left photo">
        <img src="/static/images/me.png" alt="Uche Jude" />
      </div>
      <div className="left info">
        <h3>
          Hi, I'm <span>Uche Jude</span>.<br/>Welcome to my seat of thoughts.
        </h3>
      </div>
    </div>

    <style jsx>{`
      #about {
        background: rgba(225, 225, 225, 0.0002);
        padding: 30px 0;
        min-height: 200px;
        box-sizing: border-box;
      }
      
      #about > div, #about > div > div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      #about > div div:last-child {
        box-sizing: border-box;
        width: calc(100% - 180px);
        padding: 0 10px;
      }

      #about > div div:first-child {
        width: 180px;
        padding: 0 20px 0 0;
      }

      #about > div img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #f1f1f1;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.03);
      }

      #about h3 {
        font-size: 1.6em;
        font-weight: 100;
        margin: 3px 0;
      }

      #about h3 span {
        font-weight: 500;
      }

      #about img {
        width: 300px;
      }

      @media only screen and (max-width: 600px) {
        #about div.photo {
          display: none;
          width: 0;
        }

        #about > div div:last-child {
          width: 100%;
        }

        #about > div div:last-child h3 {
          font-size: 1.3em;
        }
      }
    `}</style>
  </div>
)