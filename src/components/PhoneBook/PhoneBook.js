import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import { FormTitle, ContactTitle, SearchTitle } from './PhoneBooksStyled';
import { removeContact } from 'redux/contactsSlice';
export const PhoneBook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const onFilterArray = array => {
    return array.filter(contact => {
      const lowerCaseName = contact.name.toLowerCase();
      const lowerCaseFilter = filter.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });
  };

  const handleClickDeleteBtn = e => {
    dispatch(removeContact(e.target.id));
  };

  const createArrayOfContacts = () => {
    if (filter !== '') {
      return onFilterArray(contacts).map(contact => contact);
    }
    return contacts;
  };

  return (
    <Box>
      <FormTitle>Phonebook</FormTitle>
      <FormContainer />
      <Box>
        <ContactTitle>Contacts</ContactTitle>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchContainer />
        <ContactListContainer
          arrayOfContacts={createArrayOfContacts()}
          handleClickDeleteBtn={handleClickDeleteBtn}
        />
      </Box>
    </Box>
  );
};
