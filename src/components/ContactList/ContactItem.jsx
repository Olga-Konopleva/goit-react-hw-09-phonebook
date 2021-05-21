import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid red;
  color: red;
  width: 80px;
  margin-left: 1em;
  padding: 0.25em 1em;
  &:hover {
    background: LemonChiffon;
  }
`;

const Li = styled.li`
  margin-bottom: 10px;
`;

// const getContactsById = id => state =>
//   state.contacts.items.find(contact => contact.id === id);

const ContactItem = ({ id }) => {
  const { name, number } = useSelector(contactsSelectors.getContactById(id));
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Li>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactItem;
