import ContactItem from './ContactItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

const Ul = styled.ul`
  list-style: none;
  padding-left: 5px;
`;

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilterContacts);
  return (
    <>
      {!!contacts.length && <h2>Контакты</h2>}
      <Ul>
        {contacts.map(({ id }) => (
          <ContactItem key={id} id={id} />
        ))}
      </Ul>
    </>
  );
};

export default ContactList;
