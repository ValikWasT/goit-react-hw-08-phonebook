import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem, ContactText, RemoveBtn } from './ContactListItemStyled';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
import Notiflix from 'notiflix';
export const ContactListItem = ({ contact }) => {
  const [loadingId, setLoadingId] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const handleClickDeleteBtn = () => {
    Notiflix.Notify.info(`Contact deleting...`);
    setLoadingId(contact.id);
    dispatch(deleteContact(contact.id));
  };

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
        {isLoading && loadingId === contact.id ? (
          <RotatingLines width="25" height="25" strokeColor="yellow" />
        ) : (
          'Delete'
        )}
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
