import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Sorry, the page you tried cannot be found</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
