import { Component } from 'react';
import { connect } from 'react-redux';
import { getName } from '../redux/auth/auth-selectors';

class HomeView extends Component {
  render() {
    return (
      <h1>Приветствуем! Здесь ты можешь хранить свои телефонные контакты! </h1>
    );
  }
}

const mapStateToProps = state => ({
  name: getName(state),
});

export default connect(mapStateToProps)(HomeView);
