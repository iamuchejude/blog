export default ({ page }) => (
  <div className="uc">
    <img src="/static/images/under-construction.png" alt="Under Construction" />
    <h3>
      Oops! { page || 'This ' } page isn't up yet.
    </h3>
    <h5>
      I am doing my best to make sure this comes up as soon as possible
    </h5>
    
    <style jsx>{`
      .uc {
        padding: 30px 10px;
        text-align: center;
      }

      .uc img {
        width: 200px;
        margin: auto;
      }

      .uc h3 {
        font-size: 1.7em;
        font-weight: 600;
      }

      .uc h5 {
        margin: 5px 0;
        font-size: 1em;
        font-weight: 300;
      }
    `}</style>
  </div>
)