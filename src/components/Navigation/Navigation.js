import { React, Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAutendicated } from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    const { isAutenticated } = this.props;
    return (
      <nav>
        <NavLink
          className={styles.nav_link}
          activeClassName={styles.nav_linkActive}
          to="/"
          exact
        >
          Главная
        </NavLink>
        {isAutenticated && (
          <NavLink
            className={styles.nav_link}
            activeClassName={styles.nav_linkActive}
            to="/contacts"
            exact
          >
            Мои контакты
          </NavLink>
        )}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAutenticated: getAutendicated(state),
});

export default connect(mapStateToProps)(Navigation);
