import { createSelector } from 'reselect';

export const getAllContacts = state => state.contacts.items;

export const getContactById = id =>
  createSelector([getAllContacts], items =>
    items.find(contact => contact.id === id),
  );

const getFilter = state => state.contacts.filter;

export const getFilterContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
