import Navigation from '../Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { getAutendicated } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import styled from './AppBar.module.scss';

const AppBar = () => {
  const isAutendicated = useSelector(getAutendicated);

  return (
    <header className={styled.header}>
      <Navigation />
      {isAutendicated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

// class AppBar extends Component {
//   render() {
//     const { isAutendicated } = this.props;

//     return (
//       <header className={styled.header}>
//         <Navigation />
//         {isAutendicated ? <UserMenu /> : <AuthNav />}
//       </header>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isAutendicated: getAutendicated(state),
// });

// export default connect(mapStateToProps)(AppBar);
