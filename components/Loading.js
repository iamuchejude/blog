export default ({ size }) => (
  <div className="loading">
    <div className="loader">
      <img src="/static/images/loading.gif" alt="Loading...." />
    </div>

    <style jsx>{`
      .loading {
        padding: ${size === 'md' ? '20px' : '40px'} 10px;
        position: relative;
      }

      .loading .loader {
        text-align: center;
      }

      .loader img {
        width: ${size === 'md' ? '50px' : '100px'}
      }
    `}</style>
  </div>
);
