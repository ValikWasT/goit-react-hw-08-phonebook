import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const onRedirect = () => {
    Notiflix.Notify.failure('Sorry... You need to log in or register.');
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
