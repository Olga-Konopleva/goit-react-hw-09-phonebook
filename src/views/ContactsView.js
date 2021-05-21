import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/contacts-operations';

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
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
