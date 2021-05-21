import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getAutendicated } from '../redux/auth/auth-selectors';

// Если маршрут ограниченный и пользователь залогинен, то рендерит редирект на /contacts
// В противном случак рендерит компонент

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAutenticated = useSelector(getAutendicated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAutenticated && routeProps.restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
