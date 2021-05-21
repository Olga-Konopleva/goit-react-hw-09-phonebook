import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAutendicated } from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const isAutendicated = useSelector(getAutendicated);

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
      {isAutendicated && (
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
};

export default Navigation;
