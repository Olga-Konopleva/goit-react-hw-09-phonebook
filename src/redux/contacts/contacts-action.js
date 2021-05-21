import { createAction } from '@reduxjs/toolkit';

export const fetchRequest = createAction('contact/FetchRequest');
export const fetchSuccess = createAction('contact/FetchSuccess');
export const fetchError = createAction('contact/FetchError');

export const addRequest = createAction('contact/AddRequest');
export const addSuccess = createAction('contact/AddSuccess');
export const addError = createAction('contact/AddError');

export const deleteRequest = createAction('contact/DeleteRequest');
export const deleteSuccess = createAction('contact/DeleteSuccess');
export const deleteError = createAction('contact/DeleteError');

export const filterContacts = createAction('contact/Filter');

//Pure Redux
// export const addContact = (name, number) => ({
//   type: actionTypes.ADD,
//   payload: { id: uuidv4(), name, number },
// });

// export const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: id,
// });

// export const filterContacts = value => ({
//   type: actionTypes.FILTER,
//   payload: value,
// });
