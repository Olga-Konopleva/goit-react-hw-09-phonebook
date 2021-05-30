import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-operations';
import { getEmail } from '../../../redux/auth/auth-selectors';
import styles from './UserMenu.module.scss';
// import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid #3f3f3f;
  color: #3f3f3f;
  width: 100px;
  height: 30px;
  margin-left: 0;
  padding: 0.25em 1em;
  font-weight: 700;

  &:hover {
    background: LemonChiffon;
  }
  @include for-size(tablet) {
    margin-left: 1em;
  }
}
`;

const UserMenu = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOut());

  return (
    <div className={styles.userMenu}>
      <p className={styles.userName}>{email}</p>
      <Button type="button" onClick={onLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default UserMenu;
