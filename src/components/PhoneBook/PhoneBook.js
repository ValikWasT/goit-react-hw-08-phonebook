import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import { FormTitle, ContactTitle, SearchTitle } from './PhoneBooksStyled';

export const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <FormTitle>Phonebook</FormTitle>
      <FormContainer />
      <Box>
        <ContactTitle>Contacts</ContactTitle>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchContainer />
        <ContactListContainer />
      </Box>
    </Box>
  );
};
