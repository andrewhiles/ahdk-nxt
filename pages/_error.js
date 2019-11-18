export default () => (
  <div className="error-container">
    <h1>Oh no! It appears something has went wrong.</h1>
    <style jsx>{`
            .error-container {
              background-image: url('${require("../public/moc-error.jpg")}');
              background-position: top center;
              background-repeat: no-repeat, no-repeat, no-repeat;
              background-size: 20%, 60%, 20%;
              padding-top: 30%;
            }
        `}</style>
  </div>
);
