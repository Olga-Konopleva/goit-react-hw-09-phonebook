import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-action';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filterContacts(e.target.value));

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChangeFilter} />
    </div>
  );
};

export default Filter;
