import { React, Component } from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { getAutendicated } from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';
import styled from './AppBar.module.scss';

class AppBar extends Component {
  render() {
    const { isAutendicated } = this.props;

    return (
      <header className={styled.header}>
        <Navigation />
        {isAutendicated ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAutendicated: getAutendicated(state),
});

export default connect(mapStateToProps)(AppBar);
