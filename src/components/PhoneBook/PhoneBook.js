import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import { FormTitle, ContactTitle, SearchTitle } from './PhoneBooksStyled';
export const PhoneBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const disabledFirstRender = useRef(false);

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (!disabledFirstRender.current) {
      disabledFirstRender.current = true;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearch = e => {
    setFilter(e.currentTarget.value);
  };

  const onFilterArray = array => {
    return array.filter(contact => {
      const lowerCaseName = contact.name.toLowerCase();
      const lowerCaseFilter = filter.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });
  };

  const handleClickDeleteBtn = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  };

  const addNewContact = (contactName, contactNumber) => {
    setContacts([
      ...contacts,
      ...[
        {
          name: contactName,
          id: nanoid(),
          number: contactNumber,
        },
      ],
    ]);
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
      <FormContainer contacts={contacts} addNewContact={addNewContact} />
      <Box>
        <ContactTitle>Contacts</ContactTitle>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchContainer filter={filter} handleSearch={handleSearch} />
        <ContactListContainer
          arrayOfContacts={createArrayOfContacts()}
          handleClickDeleteBtn={handleClickDeleteBtn}
        />
      </Box>
    </Box>
  );
};
