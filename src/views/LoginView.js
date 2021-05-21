import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import styles from './LoginView.module.scss';
import styled from 'styled-components';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Почта</span>
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          <span>Пароль</span>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
};

export default LoginView;

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ email: '', password: '' });
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <div className={styles.container}>
//         <form onSubmit={this.handleSubmit} className={styles.form}>
//           <label className={styles.label}>
//             <span>Почта</span>
//             <input
//               type="email"
//               value={email}
//               name="email"
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={styles.label}>
//             <span>Пароль</span>
//             <input
//               type="password"
//               value={password}
//               name="password"
//               onChange={this.handleChange}
//             />
//           </label>
//           <Button type="submit">Войти</Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid green;
  color: green;
  width: 150px;
  margin-top: 1em;
  margin-left: auto;
  margin-right: auto;
  padding: 0.25em 1em;
  &:hover {
    background: LemonChiffon;
  }
`;
