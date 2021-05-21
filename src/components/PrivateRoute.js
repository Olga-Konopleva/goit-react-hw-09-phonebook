import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getAutendicated } from '../redux/auth/auth-selectors';

// Если маршрут приватный и пользователь залогинен, то рендерит компонент
// В противном случае рендерит Redirect на /login

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthendicated = useSelector(getAutendicated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthendicated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
