import { ContactList } from './ContactListStyled';
export const ContactListContainer = ({
  filter,
  onFilterArray,
  contacts,
  renderOneItem,
}) => {
  return (
    <ContactList>
      {filter !== ''
        ? onFilterArray(contacts).map(contact => {
            return renderOneItem(contact);
          })
        : contacts.map(contact => {
            return renderOneItem(contact);
          })}
    </ContactList>
  );
};
