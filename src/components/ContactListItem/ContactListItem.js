import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ContactItem, ContactText, RemoveBtn } from './ContactListItemStyled';
export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClickDeleteBtn = e => {
    dispatch(removeContact(e.target.id));
  };

  return (
    <ContactItem>
      <ContactText>
        {contact.name}: {contact.number}
      </ContactText>
      <RemoveBtn id={contact.id} type="button" onClick={handleClickDeleteBtn}>
        Delete
      </RemoveBtn>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
