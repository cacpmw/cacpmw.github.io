function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} ocurred on the server`
        : `An error ocurred on the client`}
    </p>
  );
}

Error.getInitialProps = ({ response, error }) => {
  const statusCode = response
    ? response.statusCode
    : error
      ? error.statusCode
      : 404;
  return { statusCode };
};

export default Error;
