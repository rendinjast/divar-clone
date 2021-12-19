import { Redirect, Route } from 'react-router';
import { useAuthContext } from '../../context/AuthContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useAuthContext();
  return !currentUser.isLoading ? (
    <Route
      {...rest}
      render={(props) => (currentUser.user ? <Component {...props} /> : <Redirect to="/signin" />)}
    />
  ) : (
    'please wait...'
  );
};
export const AlreadyLoginRoute = ({ component: Component, ...rest }) => {
  const currentUser = useAuthContext();
  return !currentUser.isLoading ? (
    <Route
      {...rest}
      render={(props) => (!currentUser.user ? <Component {...props} /> : <Redirect to="/app" />)}
    />
  ) : (
    'please wait...'
  );
};

export default PrivateRoute;
