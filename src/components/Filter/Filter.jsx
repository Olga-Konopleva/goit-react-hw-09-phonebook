import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-action';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(filterContacts(e.target.value));

  return (
    <div>
      <p>Найти контакт по имени</p>
      <input type="text" onChange={handleChangeFilter} />
    </div>
  );
};

export default Filter;
