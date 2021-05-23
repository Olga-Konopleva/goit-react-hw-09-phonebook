import { useSelector } from 'react-redux';
import { getAutendicated, getName } from '../redux/auth/auth-selectors';
import styles from './HomeView.module.scss';

const HomeView = () => {
  const name = useSelector(getName);
  const isAutenticated = useSelector(getAutendicated);
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        Phone<span className={styles.logoAccent}>Book</span>
      </h1>
      <h2>Приветствуем{isAutenticated ? `, ${name}` : null}!</h2>
      <p>Здесь ты можешь хранить свои телефонные контакты!</p>
    </div>
  );
};

export default HomeView;

// class HomeView extends Component {
//   render() {
//     return (
//       <h1>Приветствуем! Здесь ты можешь хранить свои телефонные контакты! </h1>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   name: getName(state),
// });

// export default connect(mapStateToProps)(HomeView);
