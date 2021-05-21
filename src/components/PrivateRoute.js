import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getAutendicated } from '../redux/auth/auth-selectors';

// Если маршрут приватный и пользователь залогинен, то рендерит компонент
// В противном случае рендерит Redirect на /login

const PrivateRoute = ({
  component: Component,
  isAuntenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuntenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuntenticated: getAutendicated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
