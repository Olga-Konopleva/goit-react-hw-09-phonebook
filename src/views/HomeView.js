import { useSelector } from 'react-redux';
import { getAutendicated, getName } from '../redux/auth/auth-selectors';

const HomeView = () => {
  const name = useSelector(getName);
  const isAutenticated = useSelector(getAutendicated);
  return (
    <h1>
      Приветствуем{isAutenticated ? `, ${name}` : null}! Здесь ты можешь хранить
      свои телефонные контакты!{' '}
    </h1>
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
