import axios from 'axios';
import {
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  fetchRequest,
  fetchSuccess,
  fetchError,
} from './contacts-action';

export const fetchContacts = () => dispatch => {
  dispatch(fetchRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError(error)));
};

export const addContact = payload => dispatch => {
  // const contact = { ...payload };
  console.log(payload);
  dispatch(addRequest());

  axios
    .post('/contacts', payload)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error.message)));
};
