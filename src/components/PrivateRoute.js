import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const onRedirect = () => {
    return <Navigate to={redirectTo} />;
  };
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? onRedirect() : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.shape().isRequired,
  redirectTo: PropTypes.string,
};
