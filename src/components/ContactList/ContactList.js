import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './ContactListStyled';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { removeContact } from 'redux/contactsSlice';
import { getFilterValue, getContacts } from 'redux/selectors';
export const ContactListContainer = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const handleClickDeleteBtn = e => {
    dispatch(removeContact(e.target.id));
  };

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
        <ContactListItem
          key={contact.id}
          handleClickDeleteBtn={handleClickDeleteBtn}
          contact={contact}
        ></ContactListItem>
      ))}
    </ContactList>
  );
};
