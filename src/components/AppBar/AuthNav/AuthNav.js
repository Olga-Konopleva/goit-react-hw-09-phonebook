import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <div className={styles.authNavContainer}>
      <NavLink
        to="/register"
        className={styles.nav_link}
        activeClassName={styles.nav_linkActive}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        className={styles.nav_link}
        activeClassName={styles.nav_linkActive}
      >
        Логин
      </NavLink>
    </div>
  );
};

export default AuthNav;
