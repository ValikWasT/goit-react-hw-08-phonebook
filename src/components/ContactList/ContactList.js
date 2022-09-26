import { ContactList } from './ContactListStyled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
export const ContactListContainer = ({
  handleClickDeleteBtn,
  arrayOfContacts,
}) => {
  return (
    <ContactList>
      {arrayOfContacts().map(contact => (
        <ContactListItem
          key={contact.id}
          handleClickDeleteBtn={handleClickDeleteBtn}
          contact={contact}
        ></ContactListItem>
      ))}
    </ContactList>
  );
};
