import { useSelector } from 'react-redux';
import { ContactList } from './ContactListStyled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { getFilterValue, getContacts } from 'redux/selectors';
export const ContactListContainer = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const createArrayOfContacts = () => {
    if (filter !== '') {
      return onFilterArray(contacts).map(contact => contact);
    }
    return contacts;
  };

  const onFilterArray = array => {
    return array.filter(contact => {
      const lowerCaseName = contact.name.toLowerCase();
      const lowerCaseFilter = filter.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });
  };

  return (
    <ContactList>
      {createArrayOfContacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact}></ContactListItem>
      ))}
    </ContactList>
  );
};
