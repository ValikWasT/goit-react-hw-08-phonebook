import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactText, RemoveBtn } from './ContactListItemStyled';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const handleClickDeleteBtn = () => dispatch(deleteContact(contact.id));

  return (
    <ContactItem>
      <ContactText>
        {contact.name}: {contact.phone}
      </ContactText>
      <RemoveBtn
        id={contact.id}
        type="button"
        onClick={handleClickDeleteBtn}
        disabled={isLoading}
      >
        Delete
      </RemoveBtn>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
