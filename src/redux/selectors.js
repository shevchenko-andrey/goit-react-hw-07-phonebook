export const getFilter = state => {
  console.log('get', state);
  return state.filter;
};

export const getContacts = state => state.items;

export const getvisibleContacts = ({ items, filter }) =>
  items.filter(({ name }) => name.toLowerCase().includes(filter));
