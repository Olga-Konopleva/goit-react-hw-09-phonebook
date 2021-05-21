import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import styled from 'styled-components';
import styles from './LoginView.module.scss';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <span>Имя</span>
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
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
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </div>
  );
};

export default RegisterView;

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} className={styles.form}>
//           <label className={styles.label}>
//             <span>Имя</span>
//             <input
//               type="text"
//               value={name}
//               name="name"
//               onChange={this.handleChange}
//             />
//           </label>
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
//           <Button type="submit">Зарегистрироваться</Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);

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
