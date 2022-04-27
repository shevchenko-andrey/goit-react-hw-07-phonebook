// import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './contacts.styled';
import { useGetContactsQuery } from 'redux/contactsApi';
import ContactsItem from '../ContactsItem';
// import { itemSlice } from 'redux/contactsSlice';
// import { getvisibleContacts } from 'redux/selectors';

// const { remove } = itemSlice.actions;
function Contacts() {
  // const dispatch = useDispatch();
  // const visibleContacts = useSelector(getvisibleContacts);
  const { data } = useGetContactsQuery({});
  console.log(data);
  return (
    <ContactList>
      {data &&
        data.map(({ id, name, phone }) => (
          <ContactsItem
            name={name}
            key={id}
            id={id}
            phone={phone}
            // onDeleteContact={() => dispatch(remove(id))}
          />
        ))}
    </ContactList>
  );
}

export default Contacts;
