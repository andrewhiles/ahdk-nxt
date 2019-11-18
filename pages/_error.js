function Error({ statusCode }) {
  return (
    <div className="error-container">
      <h1>Oh no!</h1>
      {statusCode
        ? `An error ${statusCode} occurred on the server`
        : "An error occurred on the client"}
      <style jsx>{`
            .error-container {
              background-image: url('${require("../public/moc-error.jpg")}');
              background-position: top center;
              background-size: 20%, 80%, 20%;
              padding-top: 30%;
              color: #f008b7;
              font-size: 26px;
            }
        `}</style>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
