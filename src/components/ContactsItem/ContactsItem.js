import PropTypes from 'prop-types';

import { Item, Button, ContactWrapper } from './ContactsItem.styled';
function ContactsItem({ id, name, phone, onDeleteContact }) {
  return (
    <Item>
      <ContactWrapper>
        <span>{name}:</span>
        <span>{phone}</span>
      </ContactWrapper>
      {/* <Button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </Button> */}
    </Item>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
