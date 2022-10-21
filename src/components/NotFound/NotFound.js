import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Not Found, 404</h1>
      <Link to="/">Go home page</Link>
    </>
  );
};
export default NotFound;
