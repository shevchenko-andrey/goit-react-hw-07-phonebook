import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Item, Button, ContactWrapper } from './ContactsItem.styled';
import { toast } from 'react-hot-toast';
function ContactsItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const onDeleteContactById = id => {
    const result = deleteContact(id);
    toast.promise(
      result,
      {
        loading: 'Deleting a contact',
        success: 'Successfully deleted!',

        error: 'Opps, something wrong, try again',
      },
      {
        position: 'top-right',

        style: {
          marginTop: '10px',
          minWidth: '250px',
          color: '#ffffff',
          backgroundColor: '#4f8f2a',
        },
        success: {
          duration: 5000,

          icon: '🔥',
        },
      }
    );
  };
  return (
    <Item>
      <ContactWrapper>
        <span>{name}:</span>
        <span>{phone}</span>
      </ContactWrapper>
      <Button
        disabled={isDeleting}
        onClick={() => onDeleteContactById(id)}
        type="button"
      >
        Delete
      </Button>
    </Item>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItem;
