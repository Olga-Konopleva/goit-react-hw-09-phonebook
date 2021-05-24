import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import {
  getAllContacts,
  getIsLoading,
} from '../redux/contacts/contacts-selectors';
import styles from './HomeView.module.scss';

const ContactsView = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const isFilterShow = contacts.length > 1;

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        Phone<span className={styles.logoAccent}>Book</span>
      </h1>
      <ContactForm />

      {isFilterShow && <Filter />}

      {isLoading ? <Loader /> : <ContactList />}
    </div>
  );
};

export default ContactsView;

// class ContactsView extends Component {
//   componentDidMount() {
//     this.props.fetchContacts();
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(fetchContacts()),
// });

// export default connect(null, mapDispatchToProps)(ContactsView);
