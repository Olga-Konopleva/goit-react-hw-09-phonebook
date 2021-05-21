import { Component } from 'react';
import { connect } from 'react-redux';
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
  margin-left: 1em;
  padding: 0.25em 1em;
  font-weight: 700;

  &:hover {
    background: LemonChiffon;
  }
`;

class UserMenu extends Component {
  render() {
    const { email, onLogout } = this.props;

    return (
      <div className={styles.userMenu}>
        <p className={styles.user}>{email}</p>
        <Button type="button" onClick={onLogout}>
          Выйти
        </Button>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: getEmail(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
