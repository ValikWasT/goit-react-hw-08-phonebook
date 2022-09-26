import { ContactItem, ContactText, RemoveBtn } from './ContactListItemStyled';
export const ContactListItem = ({ contact, handleClickDeleteBtn }) => {
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
